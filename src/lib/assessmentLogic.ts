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

export function calculateUrgency(data: AssessmentData, actions?: { critical: string[]; high: string[]; moderate: string[]; low: string[] }): UrgencyResult {
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

  // Default actions (English)
  const defaultActions = {
    critical: [
      'Call your nearest 24-hour emergency vet IMMEDIATELY',
      'Keep your pet calm and still during transport',
      'Do NOT give any food, water, or medication',
      'If bleeding, apply gentle pressure with clean cloth',
      'Drive safely but urgently to the vet',
    ],
    high: [
      'See a vet within the next 2-4 hours',
      'Monitor your pet closely for any changes',
      'Prepare transport and have vet contact ready',
      'Keep your pet comfortable and calm',
      'Note any new symptoms that develop',
    ],
    moderate: [
      'Schedule a vet visit within 24 hours',
      'Monitor symptoms closely',
      'Ensure your pet stays hydrated',
      'Keep a symptom diary to share with the vet',
      'Call the vet if symptoms worsen',
    ],
    low: [
      'Continue monitoring your pet',
      'Maintain normal feeding and hydration',
      'Schedule a routine check-up if concerned',
      'Watch for any changes in behavior',
      'Keep emergency vet numbers handy',
    ],
  };

  const actionSet = actions || defaultActions;

  // Determine urgency level
  let level: UrgencyLevel;
  let color: string;
  let bgColor: string;
  let borderColor: string;
  let resultActions: string[];

  if (score >= 80) {
    level = 'CRITICAL';
    color = 'text-red-700';
    bgColor = 'bg-red-50';
    borderColor = 'border-red-500';
    resultActions = actionSet.critical;
  } else if (score >= 50) {
    level = 'HIGH';
    color = 'text-orange-700';
    bgColor = 'bg-orange-50';
    borderColor = 'border-orange-500';
    resultActions = actionSet.high;
  } else if (score >= 25) {
    level = 'MODERATE';
    color = 'text-yellow-700';
    bgColor = 'bg-yellow-50';
    borderColor = 'border-yellow-500';
    resultActions = actionSet.moderate;
  } else {
    level = 'LOW';
    color = 'text-green-700';
    bgColor = 'bg-green-50';
    borderColor = 'border-green-500';
    resultActions = actionSet.low;
  }

  return { level, score, color, bgColor, borderColor, actions: resultActions };
}

// Get urgency headline based on level - can accept translated templates
export function getUrgencyHeadline(
  level: UrgencyLevel,
  petName: string,
  userName: string,
  translations?: {
    critical: { headline: string; subheadline: string };
    high: { headline: string; subheadline: string };
    moderate: { headline: string; subheadline: string };
    low: { headline: string; subheadline: string };
  }
): { headline: string; subheadline: string } {
  const defaultTranslations = {
    critical: {
      headline: `${petName} NEEDS EMERGENCY CARE RIGHT NOW`,
      subheadline: `${userName}, every second counts. Here's exactly what to do...`,
    },
    high: {
      headline: `WARNING: ${petName} Shows Concerning Signs`,
      subheadline: `${userName}, don't wait until it's too late. See a vet within 2 hours.`,
    },
    moderate: {
      headline: `Good News, ${userName}: ${petName} Can Wait a Few Hours`,
      subheadline: `But here's what smart pet owners do next...`,
    },
    low: {
      headline: `${petName} Looks Okay For Now, ${userName}`,
      subheadline: `But here's how to make SURE nothing gets worse...`,
    },
  };

  const t = translations || defaultTranslations;

  const replaceVariables = (text: string) => {
    return text.replace(/{petName}/g, petName).replace(/{userName}/g, userName);
  };

  switch (level) {
    case 'CRITICAL':
      return {
        headline: replaceVariables(t.critical.headline),
        subheadline: replaceVariables(t.critical.subheadline),
      };
    case 'HIGH':
      return {
        headline: replaceVariables(t.high.headline),
        subheadline: replaceVariables(t.high.subheadline),
      };
    case 'MODERATE':
      return {
        headline: replaceVariables(t.moderate.headline),
        subheadline: replaceVariables(t.moderate.subheadline),
      };
    case 'LOW':
      return {
        headline: replaceVariables(t.low.headline),
        subheadline: replaceVariables(t.low.subheadline),
      };
  }
}
