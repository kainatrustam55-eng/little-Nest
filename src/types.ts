export interface Program {
  id: string;
  name: string;
  tagline: string;
  age: string;
  learningFocus: string;
  activities: string[];
  skillsDeveloped: string[];
  badgeColor: string;
  accentColor: string;
  description: string;
  imageKey?: 'learningActivity' | 'outdoorPlay' | 'artCreative';
}

export interface LearningAreaItem {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  experience: string;
  color: string;
  borderColor: string;
  lightBg: string;
}

export interface DailyRhythmStep {
  time: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface GrowthJourneyStage {
  step: number;
  pillar: string;
  label: string;
  description: string;
  howWeNurture: string;
  icon: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Programs' | 'Admissions' | 'Timings' | 'General';
}

export interface OnlineAdmissionFormData {
  childName: string;
  dob: string;
  gender: string;
  targetProgram: string;
  parentName: string;
  parentRelation: string;
  contactNumber: string;
  email: string;
  address: string;
  previousSchool: string;
  emergencyContact: string;
  medicalInfo: string;
  heardFrom: string;
}

export interface BookVisitFormData {
  preferredDate: string;
  preferredTime: string;
  parentName: string;
  phone: string;
  notes?: string;
}
