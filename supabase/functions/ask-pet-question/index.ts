import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question, citySlug, state, language = "en" } = await req.json();

    if (!question) {
      return new Response(
        JSON.stringify({ error: "Question is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Processing question: "${question}" for city: ${citySlug}, state: ${state}`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Search for matching keywords in the database
    const { data: keywords, error: dbError } = await supabase
      .from("pet_qa_keywords")
      .select("*")
      .or(`city_slug.is.null,city_slug.eq.${citySlug}`)
      .eq("language", language)
      .order("priority", { ascending: false })
      .limit(20);

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
    const cityName = citySlug ? citySlug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) : 'Malaysia';
    const systemPrompt = `You are a helpful pet care assistant for PetCare Malaysia, specifically answering questions for pet owners in ${cityName}${state ? `, ${state}` : ''}.

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
- Use Malaysian context (RM for currency, local regulations, tropical climate considerations)`;

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
          { role: "user", content: question }
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
        city: citySlug,
        state: state,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in ask-pet-question:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
