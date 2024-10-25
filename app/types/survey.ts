export interface FormData {
  valuableFeatures: string[];
  appInteraction: string;
  reminderTypes: string[];
  primaryDevice: string;
  appUsageFrequency: string;
  appFrustrations: string[];
  healthTracking: string[];
  healthcareVisits: string;
  healthcareChallenges: string[];
  wearableIntegration: boolean;
  reproductiveHealthRecords: string;
  privacyFeatures: string;
  dataStorageComfort: string;
  educationalContentPreference: string[];
  beneficialContent: string[];
  expertAdviceImportance: string;
  communitySupport: boolean;
  personalizeExperience: boolean;
  personalizedInsights: string;
  motivation: string;
  desiredFeature: string;
  additionalComments: string;
  privacyFeaturesSecure: string;
}

export interface SurveyQuestion {
  id: string;
  text: string;
  type: 'radio' | 'checkbox' | 'text' | 'textarea';
  options?: string[];
}

export interface SurveyResponse {
  questionId: string;
  answer: string | string[] | boolean;
}

export interface StepOneData {
  valuableFeatures: string[];
  appInteraction: string;
  reminderTypes: string[];
}

export interface StepSixData {
  personalizeExperience: boolean;
  personalizedInsights: string;
  motivation: string;
  desiredFeature: string;
  additionalComments: string;
}
