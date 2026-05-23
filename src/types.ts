export type SkillCategory = 'traffic' | 'ads' | 'conversion' | 'strategy';

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: SkillCategory;
  description: string;
}

export interface ServiceItem {
  id: string;
  iconName: string; // Lucide icon name
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: string;
  problem: string;
  strategy: string;
  results: {
    metric: string;
    value: string;
    sub?: string;
  }[];
  mainMetric: string;
  bgColor: string; // Tailwind class for gradients
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  avatarUrl: string;
}

export interface BlogPostItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string; // Brief article text for dynamic viewing
  readTime: string;
  date: string;
  imageUrl: string;
  tags: string[];
}
