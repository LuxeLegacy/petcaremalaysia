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

const getUrgencyActions = (level: string): string[] => {
  switch (level) {
    case 'CRITICAL':
      return [
        'Call your nearest 24-hour emergency vet IMMEDIATELY',
        'Keep your pet calm and still during transport',
        'Do NOT give any food, water, or medication',
        'If bleeding, apply gentle pressure with clean cloth',
        'Drive safely but urgently to the vet',
      ];
    case 'HIGH':
      return [
        'See a vet within the next 2-4 hours',
        'Monitor your pet closely for any changes',
        'Prepare transport and have vet contact ready',
        'Keep your pet comfortable and calm',
        'Note any new symptoms that develop',
      ];
    case 'MODERATE':
      return [
        'Schedule a vet visit within 24 hours',
        'Monitor symptoms closely',
        'Ensure your pet stays hydrated',
        'Keep a symptom diary to share with the vet',
        'Call the vet if symptoms worsen',
      ];
    default:
      return [
        'Continue monitoring your pet',
        'Maintain normal feeding and hydration',
        'Schedule a routine check-up if concerned',
        'Watch for any changes in behavior',
        'Keep emergency vet numbers handy',
      ];
  }
};

const getUrgencyHeadline = (level: string, petName: string, userName: string): { headline: string; subheadline: string } => {
  switch (level) {
    case 'CRITICAL':
      return {
        headline: `${petName} NEEDS EMERGENCY CARE RIGHT NOW`,
        subheadline: `${userName}, every second counts. Here's exactly what to do...`,
      };
    case 'HIGH':
      return {
        headline: `WARNING: ${petName} Shows Concerning Signs`,
        subheadline: `${userName}, don't wait until it's too late. See a vet within 2 hours.`,
      };
    case 'MODERATE':
      return {
        headline: `Good News, ${userName}: ${petName} Can Wait a Few Hours`,
        subheadline: `But here's what smart pet owners do next...`,
      };
    default:
      return {
        headline: `${petName} Looks Okay For Now, ${userName}`,
        subheadline: `But here's how to make SURE nothing gets worse...`,
      };
  }
};

const buildAdminEmailHtml = (data: AssessmentEmailRequest): string => {
  const urgencyColor = getUrgencyColor(data.urgencyLevel);
  const conditionsText = data.conditions.map(c => getLabel('conditions', c)).join(', ') || 'None';

  return `
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
};

const buildUserEmailHtml = (data: AssessmentEmailRequest): string => {
  const urgencyColor = getUrgencyColor(data.urgencyLevel);
  const { headline, subheadline } = getUrgencyHeadline(data.urgencyLevel, data.petName, data.userName);
  const actions = getUrgencyActions(data.urgencyLevel);
  
  const urgencyBgColor = data.urgencyLevel === 'CRITICAL' ? '#fef2f2' 
    : data.urgencyLevel === 'HIGH' ? '#fff7ed'
    : data.urgencyLevel === 'MODERATE' ? '#fefce8'
    : '#f0fdf4';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Pet Emergency Assessment Results</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Header Banner -->
        <div style="background-color: ${urgencyColor}; color: white; padding: 24px; text-align: center;">
          <h1 style="margin: 0 0 8px 0; font-size: 24px;">${headline}</h1>
          <p style="margin: 0; opacity: 0.9;">${subheadline}</p>
        </div>

        <div style="padding: 24px;">
          <!-- Urgency Badge -->
          <div style="background-color: ${urgencyBgColor}; border: 2px solid ${urgencyColor}; border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: center;">
            <span style="font-size: 14px; color: #6b7280;">Assessment Result</span>
            <div style="font-size: 28px; font-weight: bold; color: ${urgencyColor}; margin-top: 4px;">
              ${data.urgencyLevel} URGENCY
            </div>
            <div style="font-size: 14px; color: #6b7280; margin-top: 4px;">Score: ${data.urgencyScore}/100</div>
          </div>

          <!-- Pet Summary -->
          <div style="background-color: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 12px 0; color: #374151;">🐾 Assessment for ${data.petName}</h3>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 4px 0; color: #6b7280; font-size: 14px;">Pet Type:</td>
                <td style="padding: 4px 0; font-size: 14px; text-transform: capitalize;">${data.petType === 'dog' ? '🐕 Dog' : '🐈 Cat'}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #6b7280; font-size: 14px;">Breed:</td>
                <td style="padding: 4px 0; font-size: 14px;">${data.breed}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #6b7280; font-size: 14px;">Location:</td>
                <td style="padding: 4px 0; font-size: 14px;">${data.city}, ${data.state}</td>
              </tr>
            </table>
          </div>

          <!-- Recommended Actions -->
          <div style="margin-bottom: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #374151; display: flex; align-items: center;">
              📋 Your Next Steps
            </h3>
            <ol style="margin: 0; padding-left: 0; list-style: none;">
              ${actions.map((action, index) => `
                <li style="display: flex; align-items: flex-start; margin-bottom: 12px;">
                  <span style="flex-shrink: 0; width: 28px; height: 28px; background-color: ${urgencyColor}; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; margin-right: 12px;">${index + 1}</span>
                  <span style="padding-top: 4px; color: #374151;">${action}</span>
                </li>
              `).join('')}
            </ol>
          </div>

          <!-- Key Symptoms Summary -->
          <div style="background-color: #fef3c7; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h4 style="margin: 0 0 12px 0; color: #92400e;">⚠️ Key Symptoms Recorded</h4>
            <ul style="margin: 0; padding-left: 20px; color: #78350f; font-size: 14px;">
              <li style="margin-bottom: 4px;">Breathing: ${getLabel('breathing', data.breathing)}</li>
              <li style="margin-bottom: 4px;">Alertness: ${getLabel('alertness', data.alertness)}</li>
              <li style="margin-bottom: 4px;">Bleeding: ${getLabel('bleeding', data.bleeding)}</li>
              <li style="margin-bottom: 4px;">Duration: ${getLabel('duration', data.duration)}</li>
            </ul>
          </div>

          <!-- Emergency CTA -->
          ${data.urgencyLevel === 'CRITICAL' || data.urgencyLevel === 'HIGH' ? `
          <div style="text-align: center; margin-bottom: 24px;">
            <a href="https://www.google.com/maps/search/emergency+vet+${encodeURIComponent(data.city)}+${encodeURIComponent(data.state)}" 
               style="display: inline-block; background-color: ${urgencyColor}; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">
              🗺️ Find Emergency Vets Near ${data.city}
            </a>
          </div>
          ` : ''}

          <!-- Find a Vet Section -->
          <div style="background-color: #eff6ff; border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: center;">
            <h4 style="margin: 0 0 8px 0; color: #1e40af;">Need Help Finding a Vet?</h4>
            <p style="margin: 0 0 12px 0; color: #3b82f6; font-size: 14px;">
              Visit our website to find verified veterinary clinics in ${data.city}
            </p>
            <a href="https://petcaremalaysia.lovable.app" 
               style="display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Visit PetCare Malaysia
            </a>
          </div>

          <!-- Disclaimer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 24px;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">
              ⚠️ <strong>Important:</strong> This assessment is for informational purposes only and does not replace professional veterinary advice. Always consult a licensed veterinarian for proper diagnosis and treatment.
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Assessment completed: ${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">
            Sent by <a href="https://petcaremalaysia.lovable.app" style="color: #3b82f6; text-decoration: none;">PetCare Malaysia</a> • Your trusted pet emergency resource
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: AssessmentEmailRequest = await req.json();

    // Send admin notification email
    const adminEmailHtml = buildAdminEmailHtml(data);
    const adminEmailPromise = resend.emails.send({
      from: "Pet Emergency <onboarding@resend.dev>",
      to: ["soyoungplus18@gmail.com"],
      subject: `🚨 [${data.urgencyLevel}] New Pet Emergency Assessment - ${data.petName}`,
      html: adminEmailHtml,
    });

    // Send user confirmation email
    const userEmailHtml = buildUserEmailHtml(data);
    const userEmailPromise = resend.emails.send({
      from: "PetCare Malaysia <onboarding@resend.dev>",
      to: [data.userEmail],
      subject: `🐾 ${data.petName}'s Emergency Assessment Results - ${data.urgencyLevel} Urgency`,
      html: userEmailHtml,
    });

    // Send both emails in parallel
    const [adminResult, userResult] = await Promise.all([adminEmailPromise, userEmailPromise]);

    console.log("Admin email sent:", adminResult);
    console.log("User confirmation email sent:", userResult);

    return new Response(JSON.stringify({ 
      success: true, 
      adminEmail: adminResult,
      userEmail: userResult 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error sending assessment emails:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
