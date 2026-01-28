import { useState, useCallback } from 'react';
import { lookupPostcode } from '@/lib/locationUtils';
import { calculateUrgency, UrgencyResult } from '@/lib/assessmentLogic';
import { TOTAL_STEPS } from '@/lib/assessmentData';

export interface AssessmentState {
  // Entry
  zipcode: string;
  city: string;
  state: string;

  // Pet Profile
  petType: 'dog' | 'cat' | null;
  breed: string;
  age: string;
  sex: 'male' | 'female' | null;
  fixed: 'yes' | 'no' | 'not_sure' | null;
  weight: string;
  conditions: string[];
  ingestion: string;
  environment: string;
  insured: 'yes' | 'no' | 'not_sure' | null;

  // Symptoms
  mainSymptom: string;
  painLevel: string;

  // Vital Signs
  breathing: string;
  alertness: string;
  bleeding: string;
  duration: string;

  // Description
  description: string;
  photos: File[];

  // Contact Info
  userName: string;
  userEmail: string;
  userPhone: string;
  petName: string;

  // Progress
  currentStep: number;
}

const initialState: AssessmentState = {
  zipcode: '',
  city: '',
  state: '',
  petType: null,
  breed: '',
  age: '',
  sex: null,
  fixed: null,
  weight: '',
  conditions: [],
  ingestion: '',
  environment: '',
  insured: null,
  mainSymptom: '',
  painLevel: '',
  breathing: '',
  alertness: '',
  bleeding: '',
  duration: '',
  description: '',
  photos: [],
  userName: '',
  userEmail: '',
  userPhone: '',
  petName: '',
  currentStep: 0,
};

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>(initialState);
  const [urgencyResult, setUrgencyResult] = useState<UrgencyResult | null>(null);

  const updateField = useCallback(<K extends keyof AssessmentState>(
    field: K,
    value: AssessmentState[K]
  ) => {
    setState((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setZipcode = useCallback((zipcode: string) => {
    const location = lookupPostcode(zipcode);
    setState((prev) => ({
      ...prev,
      zipcode,
      city: location?.city || '',
      state: location?.state || '',
    }));
  }, []);

  const toggleCondition = useCallback((condition: string) => {
    setState((prev) => {
      const conditions = prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions.filter((c) => c !== 'none'), condition];
      
      // If 'none' is selected, clear all others
      if (condition === 'none') {
        return { ...prev, conditions: ['none'] };
      }
      
      return { ...prev, conditions };
    });
  }, []);

  const nextStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, TOTAL_STEPS + 1), // +1 for contact form
    }));
  }, []);

  const prevStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0),
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(0, Math.min(step, TOTAL_STEPS + 1)),
    }));
  }, []);

  const calculateResults = useCallback(() => {
    const result = calculateUrgency({
      breathing: state.breathing,
      alertness: state.alertness,
      bleeding: state.bleeding,
      duration: state.duration,
      ingestion: state.ingestion,
      conditions: state.conditions,
      painLevel: state.painLevel,
    });
    setUrgencyResult(result);
    return result;
  }, [state]);

  const reset = useCallback(() => {
    setState(initialState);
    setUrgencyResult(null);
  }, []);

  const addPhotos = useCallback((files: FileList) => {
    setState((prev) => ({
      ...prev,
      photos: [...prev.photos, ...Array.from(files)].slice(0, 5),
    }));
  }, []);

  const removePhoto = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  }, []);

  const isStepValid = useCallback((step: number): boolean => {
    switch (step) {
      case 0:
        return state.zipcode.length === 5 && !!state.city;
      case 1:
        return !!state.petType;
      case 2:
        return !!state.breed;
      case 3:
        return !!state.age;
      case 4:
        return !!state.sex;
      case 5:
        return !!state.fixed;
      case 6:
        return !!state.weight;
      case 7:
        return state.conditions.length > 0;
      case 8:
        return !!state.ingestion;
      case 9:
        return !!state.environment;
      case 10:
        return !!state.insured;
      case 11:
        return !!state.mainSymptom;
      case 12:
        return !!state.painLevel;
      case 13:
        return !!state.breathing;
      case 14:
        return !!state.alertness;
      case 15:
        return !!state.bleeding;
      case 16:
        return !!state.duration;
      case 17:
        return true; // Summary is always valid
      case 18:
        return !!state.userName && !!state.userEmail && !!state.petName;
      default:
        return false;
    }
  }, [state]);

  return {
    state,
    urgencyResult,
    updateField,
    setZipcode,
    toggleCondition,
    nextStep,
    prevStep,
    goToStep,
    calculateResults,
    reset,
    addPhotos,
    removePhoto,
    isStepValid,
    totalSteps: TOTAL_STEPS,
  };
}
