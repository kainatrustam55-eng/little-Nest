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

export type BlogImageKey = 'blogMorningWelcome' | 'blogMontessoriMaterials' | 'blogCalmClassroom';

export interface BlogSectionBlock {
  id: string;
  heading: string;
  paragraphs: string[];
  subheading?: string;
  bulletPoints?: string[];
  pullQuote?: string;
  image?: {
    key: BlogImageKey;
    alt: string;
    caption: string;
    aspectClass?: string;
  };
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  authorName: string;
  authorRole: string;
  publishedDate: string;
  publishedDateISO: string;
  readTime: string;
  locationTag: string;
  coverImage: {
    key: BlogImageKey;
    alt: string;
    caption: string;
  };
  sections: BlogSectionBlock[];
  parentChecklistTitle: string;
  parentChecklist: string[];
  closingNote: string;
}

export interface GoogleReviewItem {
  id: string;
  reviewerName: string;
  initial: string;
  avatarBg: string;
  badgeText?: string;
  isLocalGuide?: boolean;
  rating: number;
  timeAgo: string;
  isNew?: boolean;
  text: string;
  screenshotUrl: string;
}


