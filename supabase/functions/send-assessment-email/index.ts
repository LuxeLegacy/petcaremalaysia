import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface AssessmentEmailRequest {
  userName: string;
  userEmail: string;
  userPhone: string | null;
  petName: string;
  city: string;
  state: string;
  petType: string;
  breed: string;
  age: string;
  sex: string;
  fixed: string;
  weight: string;
  conditions: string[];
  ingestion: string;
  environment: string;
  insured: string;
  mainSymptom: string;
  painLevel: string;
  breathing: string;
  alertness: string;
  bleeding: string;
  duration: string;
  description: string;
  urgencyLevel: string;
  urgencyScore: number;
}

const getLabelMappings = () => ({
  age: {
    puppy_kitten: 'Puppy/Kitten (0-1 year)',
    young_adult: 'Young Adult (1-3 years)',
    adult: 'Adult (3-7 years)',
    senior: 'Senior (7+ years)',
  },
  weight: {
    small: 'Small (<5kg)',
    medium: 'Medium (5-10kg)',
    large: 'Large (10-25kg)',
    extra_large: 'Extra Large (25kg+)',
  },
  fixed: {
    yes: 'Yes',
    no: 'No',
    not_sure: 'Not sure',
  },
  conditions: {
    heart_disease: 'Heart disease',
    diabetes: 'Diabetes',
    kidney_disease: 'Kidney disease',
    allergies: 'Allergies',
    cancer: 'Cancer',
    arthritis: 'Arthritis',
    none: 'None known',
  },
  ingestion: {
    chocolate: 'Chocolate',
    medication: 'Medication',
    plants: 'Plants',
    chemicals: 'Chemicals/Poison',
    none: 'None/Unknown',
  },
  environment: {
    indoor: 'Indoor only',
    outdoor: 'Outdoor only',
    both: 'Both indoor/outdoor',
  },
  mainSymptom: {
    vomiting: 'Vomiting',
    diarrhea: 'Diarrhea',
    not_eating: 'Not eating',
    limping: 'Limping/Lameness',
    other: 'Other symptoms',
  },
  painLevel: {
    none: 'No visible pain',
    mild: 'Mild discomfort',
    moderate: 'Moderate pain',
    severe: 'Severe pain/distress',
  },
  breathing: {
    normal: 'Yes, normal',
    rapid: 'Rapid/Shallow',
    labored: 'Labored/Difficulty',
    stopped: 'Not breathing',
  },
  alertness: {
    alert: 'Alert & Responsive',
    lethargic: 'Lethargic/Weak',
    disoriented: 'Disoriented/Confused',
    unresponsive: 'Unresponsive',
  },
  bleeding: {
    none: 'No bleeding',
    minor: 'Minor bleeding',
    moderate: 'Moderate bleeding',
    severe: 'Severe/Heavy bleeding',
  },
  duration: {
    just_now: 'Just now (< 1 hour)',
    today: 'Today (1-24 hours)',
    few_days: 'Few days (1-3 days)',
    week_plus: 'A week or more',
  },
});

const getLabel = (category: string, value: string): string => {
  const mappings = getLabelMappings();
  const categoryMap = mappings[category as keyof typeof mappings];
  if (categoryMap && typeof categoryMap === 'object') {
    return (categoryMap as Record<string, string>)[value] || value;
  }
  return value;
};

const getUrgencyColor = (level: string): string => {
  switch (level) {
    case 'CRITICAL': return '#dc2626';
    case 'HIGH': return '#ea580c';
    case 'MODERATE': return '#ca8a04';
    case 'LOW': return '#16a34a';
    default: return '#6b7280';
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: AssessmentEmailRequest = await req.json();

    const urgencyColor = getUrgencyColor(data.urgencyLevel);
    const conditionsText = data.conditions.map(c => getLabel('conditions', c)).join(', ') || 'None';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Pet Emergency Assessment</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h1 style="margin: 0 0 16px 0; color: #111827;">🚨 New Pet Emergency Assessment</h1>
          
          <div style="background-color: ${urgencyColor}; color: white; padding: 12px 16px; border-radius: 6px; margin-bottom: 24px;">
            <strong style="font-size: 18px;">Urgency Level: ${data.urgencyLevel}</strong>
            <span style="margin-left: 12px;">(Score: ${data.urgencyScore}/100)</span>
          </div>

          <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">📋 Contact Information</h2>
          <table style="width: 100%; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280;">Name:</td><td style="padding: 8px 0; font-weight: 600;">${data.userName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email:</td><td style="padding: 8px 0; font-weight: 600;"><a href="mailto:${data.userEmail}">${data.userEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Phone:</td><td style="padding: 8px 0; font-weight: 600;">${data.userPhone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Location:</td><td style="padding: 8px 0; font-weight: 600;">${data.city}, ${data.state}</td></tr>
          </table>

          <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">🐾 Pet Profile</h2>
          <table style="width: 100%; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280;">Pet Name:</td><td style="padding: 8px 0; font-weight: 600;">${data.petName}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Type:</td><td style="padding: 8px 0; font-weight: 600; text-transform: capitalize;">${data.petType}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Breed:</td><td style="padding: 8px 0; font-weight: 600;">${data.breed}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Age:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('age', data.age)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Sex:</td><td style="padding: 8px 0; font-weight: 600; text-transform: capitalize;">${data.sex}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Weight:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('weight', data.weight)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Spayed/Neutered:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('fixed', data.fixed)}</td></tr>
          </table>

          <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">🩺 Health Background</h2>
          <table style="width: 100%; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280;">Existing Conditions:</td><td style="padding: 8px 0; font-weight: 600;">${conditionsText}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Recent Ingestion:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('ingestion', data.ingestion)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Environment:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('environment', data.environment)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Pet Insurance:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('fixed', data.insured)}</td></tr>
          </table>

          <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">⚠️ Current Symptoms</h2>
          <table style="width: 100%; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280;">Main Symptom:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('mainSymptom', data.mainSymptom)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Pain Level:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('painLevel', data.painLevel)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Duration:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('duration', data.duration)}</td></tr>
          </table>

          <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">💓 Vital Signs</h2>
          <table style="width: 100%; margin-bottom: 24px;">
            <tr><td style="padding: 8px 0; color: #6b7280;">Breathing:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('breathing', data.breathing)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Alertness:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('alertness', data.alertness)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Bleeding:</td><td style="padding: 8px 0; font-weight: 600;">${getLabel('bleeding', data.bleeding)}</td></tr>
          </table>

          ${data.description ? `
          <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">📝 Additional Details</h2>
          <p style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; margin-bottom: 24px;">${data.description}</p>
          ` : ''}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
            <p>This assessment was submitted via PetCare Malaysia Emergency Assessment Tool.</p>
            <p>Submitted at: ${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "Pet Emergency <onboarding@resend.dev>",
      to: ["soyoungplus18@gmail.com"],
      subject: `🚨 [${data.urgencyLevel}] New Pet Emergency Assessment - ${data.petName}`,
      html: emailHtml,
    });

    console.log("Assessment email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error sending assessment email:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
