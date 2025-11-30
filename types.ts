import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  description: string;
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

export interface DownloadItem {
  name: string;
  version: string;
  description: string;
  platforms?: string[];
  iconLetter: string;
  gradient: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}