import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  skills?: string[];
  linkedin?: string;
}

export type TeamCategory = 'leadership' | 'development' | 'business';

export interface TeamData {
  leadership: TeamMember[];
  development: TeamMember[];
  business: TeamMember[];
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  isConsulting?: boolean;
  isSupport?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  status?: 'Live' | 'In Development';
  statusColor?: string;
}

export interface GitHubProject {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  stars: number;
  language?: string;
}

export interface DownloadItem {
  name: string;
  version: string;
  description: string;
  platforms?: string[];
  iconLetter: string;
  gradient: string;
  downloadUrl?: string;
  note?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// ============================================
// NEW TYPES - Added for constants refactor
// ============================================

export interface Stat {
  val: string;
  label: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  desc: string;
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
}

export interface ResourceItem {
  icon: string;
  title: string;
  desc: string;
  meta: string[];
}

export interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  testimonialAuthor?: string;
  image?: string;
}

export interface TrustedBrand {
  name: string;
  logo?: string;
  industry: string;
}