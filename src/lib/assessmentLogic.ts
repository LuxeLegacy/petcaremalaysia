// Urgency calculation logic for pet emergency assessment

export type UrgencyLevel = 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';

export interface UrgencyResult {
  level: UrgencyLevel;
  score: number;
  color: string;
  bgColor: string;
  borderColor: string;
  actions: string[];
}

interface AssessmentData {
  breathing: string;
  alertness: string;
  bleeding: string;
  duration: string;
  ingestion: string;
  conditions: string[];
  painLevel: string;
}

// Scoring weights
const WEIGHTS = {
  breathing: {
    normal: 0,
    labored: 30,
    rapid: 25,
    weak: 40,
  },
  alertness: {
    alert: 0,
    lethargic: 20,
    disoriented: 35,
    unresponsive: 50,
  },
  bleeding: {
    none: 0,
    minor: 10,
    moderate: 25,
    severe: 45,
  },
  duration: {
    just_now: 5,
    '1_6_hours': 10,
    '6_24_hours': 15,
    more_24_hours: 20,
  },
  ingestion: {
    none: 0,
    chocolate: 25,
    medication: 35,
    plants: 20,
    chemicals: 40,
  },
  painLevel: {
    none: 0,
    mild: 10,
    moderate: 20,
    severe: 35,
  },
  conditions: {
    none: 0,
    heart_disease: 15,
    diabetes: 10,
    kidney_disease: 10,
    allergies: 5,
    cancer: 15,
    arthritis: 5,
  },
};

export function calculateUrgency(data: AssessmentData): UrgencyResult {
  let score = 0;

  // Calculate breathing score
  score += WEIGHTS.breathing[data.breathing as keyof typeof WEIGHTS.breathing] || 0;

  // Calculate alertness score
  score += WEIGHTS.alertness[data.alertness as keyof typeof WEIGHTS.alertness] || 0;

  // Calculate bleeding score
  score += WEIGHTS.bleeding[data.bleeding as keyof typeof WEIGHTS.bleeding] || 0;

  // Calculate duration score
  score += WEIGHTS.duration[data.duration as keyof typeof WEIGHTS.duration] || 0;

  // Calculate ingestion score
  score += WEIGHTS.ingestion[data.ingestion as keyof typeof WEIGHTS.ingestion] || 0;

  // Calculate pain level score
  score += WEIGHTS.painLevel[data.painLevel as keyof typeof WEIGHTS.painLevel] || 0;

  // Calculate conditions score (sum all selected)
  data.conditions.forEach((condition) => {
    score += WEIGHTS.conditions[condition as keyof typeof WEIGHTS.conditions] || 0;
  });

  // Determine urgency level
  let level: UrgencyLevel;
  let color: string;
  let bgColor: string;
  let borderColor: string;
  let actions: string[];

  if (score >= 80) {
    level = 'CRITICAL';
    color = 'text-red-700';
    bgColor = 'bg-red-50';
    borderColor = 'border-red-500';
    actions = [
      'Call your nearest 24-hour emergency vet IMMEDIATELY',
      'Keep your pet calm and still during transport',
      'Do NOT give any food, water, or medication',
      'If bleeding, apply gentle pressure with clean cloth',
      'Drive safely but urgently to the vet',
    ];
  } else if (score >= 50) {
    level = 'HIGH';
    color = 'text-orange-700';
    bgColor = 'bg-orange-50';
    borderColor = 'border-orange-500';
    actions = [
      'See a vet within the next 2-4 hours',
      'Monitor your pet closely for any changes',
      'Prepare transport and have vet contact ready',
      'Keep your pet comfortable and calm',
      'Note any new symptoms that develop',
    ];
  } else if (score >= 25) {
    level = 'MODERATE';
    color = 'text-yellow-700';
    bgColor = 'bg-yellow-50';
    borderColor = 'border-yellow-500';
    actions = [
      'Schedule a vet visit within 24 hours',
      'Monitor symptoms closely',
      'Ensure your pet stays hydrated',
      'Keep a symptom diary to share with the vet',
      'Call the vet if symptoms worsen',
    ];
  } else {
    level = 'LOW';
    color = 'text-green-700';
    bgColor = 'bg-green-50';
    borderColor = 'border-green-500';
    actions = [
      'Continue monitoring your pet',
      'Maintain normal feeding and hydration',
      'Schedule a routine check-up if concerned',
      'Watch for any changes in behavior',
      'Keep emergency vet numbers handy',
    ];
  }

  return { level, score, color, bgColor, borderColor, actions };
}

// Get urgency headline based on level
export function getUrgencyHeadline(
  level: UrgencyLevel,
  petName: string,
  userName: string
): { headline: string; subheadline: string } {
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
    case 'LOW':
      return {
        headline: `${petName} Looks Okay For Now, ${userName}`,
        subheadline: `But here's how to make SURE nothing gets worse...`,
      };
  }
}
