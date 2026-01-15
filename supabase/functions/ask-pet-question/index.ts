import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: Simple in-memory store (resets on function cold start)
// For production, consider using Redis or Supabase table
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_REQUESTS = 10; // Max requests per window
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

// Input validation constants
const MAX_QUESTION_LENGTH = 500;
const MAX_CITY_SLUG_LENGTH = 100;
const MAX_STATE_LENGTH = 50;
const ALLOWED_LANGUAGES = ["en", "ms", "zh"];
const CITY_SLUG_PATTERN = /^[a-z0-9-]+$/;
const STATE_PATTERN = /^[a-zA-Z\s]+$/;

// Prompt injection detection patterns
const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(previous|all|above)\s+instructions?/i,
  /disregard\s+(previous|all|above)/i,
  /forget\s+(everything|previous|all)/i,
  /you\s+are\s+now/i,
  /act\s+as\s+(if|a)/i,
  /pretend\s+(to\s+be|you)/i,
  /reveal\s+(system|your)\s+prompt/i,
  /show\s+(me\s+)?your\s+(instructions|prompt)/i,
  /what\s+are\s+your\s+instructions/i,
];

function getClientIP(req: Request): string {
  // Try various headers for client IP
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  // Fallback to a default identifier
  return "unknown";
}

function checkRateLimit(clientIP: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 10000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!clientData || now > clientData.resetTime) {
    // New window
    rateLimitStore.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_REQUESTS - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }

  if (clientData.count >= RATE_LIMIT_REQUESTS) {
    const resetIn = clientData.resetTime - now;
    return { allowed: false, remaining: 0, resetIn };
  }

  clientData.count++;
  return { 
    allowed: true, 
    remaining: RATE_LIMIT_REQUESTS - clientData.count, 
    resetIn: clientData.resetTime - now 
  };
}

function validateQuestion(question: unknown): { valid: boolean; error?: string } {
  if (!question || typeof question !== "string") {
    return { valid: false, error: "Question is required and must be a string" };
  }

  const trimmedQuestion = question.trim();
  
  if (trimmedQuestion.length === 0) {
    return { valid: false, error: "Question cannot be empty" };
  }

  if (trimmedQuestion.length > MAX_QUESTION_LENGTH) {
    return { valid: false, error: `Question must be less than ${MAX_QUESTION_LENGTH} characters` };
  }

  // Check for prompt injection attempts
  for (const pattern of PROMPT_INJECTION_PATTERNS) {
    if (pattern.test(trimmedQuestion)) {
      console.warn("Potential prompt injection detected:", trimmedQuestion.substring(0, 100));
      return { valid: false, error: "Invalid question format" };
    }
  }

  return { valid: true };
}

function validateCitySlug(citySlug: unknown): { valid: boolean; sanitized: string | null; error?: string } {
  if (citySlug === null || citySlug === undefined) {
    return { valid: true, sanitized: null };
  }

  if (typeof citySlug !== "string") {
    return { valid: false, sanitized: null, error: "City slug must be a string" };
  }

  const trimmed = citySlug.trim().toLowerCase();
  
  if (trimmed.length === 0) {
    return { valid: true, sanitized: null };
  }

  if (trimmed.length > MAX_CITY_SLUG_LENGTH) {
    return { valid: false, sanitized: null, error: "City slug too long" };
  }

  if (!CITY_SLUG_PATTERN.test(trimmed)) {
    return { valid: false, sanitized: null, error: "Invalid city slug format" };
  }

  return { valid: true, sanitized: trimmed };
}

function validateState(state: unknown): { valid: boolean; sanitized: string | null; error?: string } {
  if (state === null || state === undefined) {
    return { valid: true, sanitized: null };
  }

  if (typeof state !== "string") {
    return { valid: false, sanitized: null, error: "State must be a string" };
  }

  const trimmed = state.trim();
  
  if (trimmed.length === 0) {
    return { valid: true, sanitized: null };
  }

  if (trimmed.length > MAX_STATE_LENGTH) {
    return { valid: false, sanitized: null, error: "State name too long" };
  }

  if (!STATE_PATTERN.test(trimmed)) {
    return { valid: false, sanitized: null, error: "Invalid state format" };
  }

  return { valid: true, sanitized: trimmed };
}

function validateLanguage(language: unknown): string {
  if (typeof language !== "string" || !ALLOWED_LANGUAGES.includes(language)) {
    return "en"; // Default to English
  }
  return language;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": Math.ceil(rateLimit.resetIn / 1000).toString(),
            "X-RateLimit-Remaining": "0",
          } 
        }
      );
    }

    // Parse request body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!body || typeof body !== "object") {
      return new Response(
        JSON.stringify({ error: "Request body must be an object" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { question, citySlug, state, language } = body as Record<string, unknown>;

    // Validate question
    const questionValidation = validateQuestion(question);
    if (!questionValidation.valid) {
      return new Response(
        JSON.stringify({ error: questionValidation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate and sanitize citySlug
    const citySlugValidation = validateCitySlug(citySlug);
    if (!citySlugValidation.valid) {
      return new Response(
        JSON.stringify({ error: citySlugValidation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate and sanitize state
    const stateValidation = validateState(state);
    if (!stateValidation.valid) {
      return new Response(
        JSON.stringify({ error: stateValidation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate language
    const validatedLanguage = validateLanguage(language);

    const sanitizedQuestion = (question as string).trim();
    const sanitizedCitySlug = citySlugValidation.sanitized;
    const sanitizedState = stateValidation.sanitized;

    console.log(`Processing question (${sanitizedQuestion.length} chars) for city: ${sanitizedCitySlug}, state: ${sanitizedState}, IP: ${clientIP}`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Search for matching keywords in the database using parameterized query
    let query = supabase
      .from("pet_qa_keywords")
      .select("*")
      .eq("language", validatedLanguage)
      .order("priority", { ascending: false })
      .limit(20);

    // Only add city filter if citySlug is provided and valid
    if (sanitizedCitySlug) {
      query = query.or(`city_slug.is.null,city_slug.eq.${sanitizedCitySlug}`);
    } else {
      query = query.is("city_slug", null);
    }

    const { data: keywords, error: dbError } = await query;

    if (dbError) {
      console.error("Database error:", dbError);
    }

    console.log(`Found ${keywords?.length || 0} potential keyword matches`);

    // Get Lovable AI API key
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build context from matching keywords
    const keywordContext = keywords && keywords.length > 0
      ? `Here are some relevant Q&A entries from our database that may help answer the question:\n\n${keywords.map((k: { question: string; answer: string; category: string }) => `Q: ${k.question}\nA: ${k.answer}\nCategory: ${k.category}`).join("\n\n")}`
      : "No specific pre-written answers found in database.";

    // Build the system prompt
    const cityName = sanitizedCitySlug ? sanitizedCitySlug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) : 'Malaysia';
    const systemPrompt = `You are a helpful pet care assistant for PetCare Malaysia, specifically answering questions for pet owners in ${cityName}${sanitizedState ? `, ${sanitizedState}` : ''}.

Your role is to:
1. Answer pet health and care questions accurately
2. Include local context when relevant (local vets, DVS offices, regulations)
3. Always recommend consulting a veterinarian for medical concerns
4. Be friendly, concise, and helpful
5. If the question is about emergencies, emphasize seeking immediate veterinary care

${keywordContext}

Important guidelines:
- Keep answers concise but informative (2-4 paragraphs max)
- Include practical, actionable advice
- Mention local resources when applicable
- If you're unsure about something, say so
- Never diagnose serious conditions - always recommend vet visits
- Use Malaysian context (RM for currency, local regulations, tropical climate considerations)
- Only answer questions related to pet care. Politely decline unrelated questions.`;

    // Call Lovable AI Gateway
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: sanitizedQuestion }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const aiData = await response.json();
    const answer = aiData.choices?.[0]?.message?.content;

    if (!answer) {
      throw new Error("No response from AI");
    }

    console.log("Successfully generated AI response");

    // Return the response with matched keywords for context
    return new Response(
      JSON.stringify({
        answer,
        matchedKeywords: keywords?.slice(0, 3).map(k => ({
          question: k.question,
          category: k.category,
        })) || [],
        city: sanitizedCitySlug,
        state: sanitizedState,
      }),
      { 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": rateLimit.remaining.toString(),
        } 
      }
    );

  } catch (error) {
    console.error("Error in ask-pet-question:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
