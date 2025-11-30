import {
  Server, BarChart3, Brain, Activity,
  MessageSquare, PieChart, ShoppingCart,
  Smartphone, Globe, Terminal
} from 'lucide-react';
import { NavItem, TeamMember, Service, Project, DownloadItem, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    initials: 'MK', 
    name: 'Moon Khumalo', 
    role: 'Founder & CEO - AI Systems and Backend', 
    description: 'Moon is the visionary founder and CEO of Eclipse Softworks, specializing in AI systems and backend infrastructure. He leads the team with innovation and purpose.' 
  },
  { 
    initials: 'PM', 
    name: 'Philani Makhoba', 
    role: 'COO & Front-End Developer', 
    description: 'Philani serves as the COO of Eclipse Softworks. A skilled front-end developer, he brings structure and clarity to every project the team undertakes.' 
  },
  { 
    initials: 'TM', 
    name: 'Tshepiso Mokwena', 
    role: 'Full-Stack Dev (Front-End Focused)', 
    description: 'Tshepiso is a passionate front-end developer and aspiring full-stack engineer, dedicated to creating impactful user experiences and scalable digital solutions.' 
  },
  { 
    initials: 'KM', 
    name: 'Karabo Makgala', 
    role: 'Security Engineer', 
    description: 'Karabo is a security engineer focused on ensuring the safety, integrity, and privacy of all digital systems built by Eclipse Softworks.' 
  },
  { 
    initials: 'NK', 
    name: 'Neo Kganyile', 
    role: 'Pen Tester', 
    description: 'Neo is an enthusiastic learner and aspiring penetration tester who brings curiosity and a security-first mindset to the team.' 
  },
  { 
    initials: 'SM', 
    name: 'Siphesihle Magudulela', 
    role: 'Front-End Developer', 
    description: 'Siphesihle is a dedicated front-end developer with a keen eye for clean interfaces and intuitive user interactions.' 
  },
  { 
    initials: 'SK', 
    name: 'Simphiwe Kubheka', 
    role: 'Accountant', 
    description: 'Simphiwe is a meticulous accountant focused on financial planning and analysis, helping Eclipse Softworks achieve sustainable growth and profitability.' 
  },
  { 
    initials: 'NN', 
    name: 'Nkanyiso Ndlovu', 
    role: 'Systems Engineer & Coordinator', 
    description: 'Nkanyiso is a systems engineer and coordinator who ensures seamless integration and coordination across all technical systems and team operations.' 
  },
  { 
    initials: 'XB', 
    name: 'Xolani Buthelezi', 
    role: 'CTO & Technical Architect', 
    description: 'Xolani is the Chief Technology Officer and Technical Architect, responsible for the overall technical strategy and system architecture.' 
  },
  { 
    initials: 'YN', 
    name: 'Yongama Nkosi', 
    role: 'Accountant', 
    description: 'Yongama is a dedicated accountant who ensures Eclipse Softworks maintains financial accuracy and compliance while supporting strategic business decisions.' 
  }
];

export const SERVICES: Service[] = [
  { 
    icon: Brain, 
    title: 'AI-Powered Solutions', 
    description: 'Leverage the power of machine learning and deep learning to automate tasks, optimize processes, and enhance decision-making.',
    features: ['Machine Learning', 'Deep Learning', 'Predictive Analytics', 'Natural Language Processing']
  },
  { 
    icon: Globe, 
    title: 'Web Development', 
    description: 'Modern, responsive web applications built with cutting-edge technologies and optimized for performance and user experience.',
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning']
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    description: 'Cross-platform mobile applications built with performance and user experience at the forefront.',
    features: ['React Native', 'Flutter', 'iOS/Android', 'Progressive Web Apps']
  },
  { 
    icon: Terminal, 
    title: 'Custom Software Engineering', 
    description: 'We tailor software solutions for your specific business needs, whether it\'s an internal system or a SaaS product.',
    features: ['Full-Stack Development', 'API Design', 'Database Architecture', 'System Integration']
  },
  { 
    icon: Server, 
    title: 'DevOps & Automation', 
    description: 'Enhance reliability and speed with CI/CD pipelines, automated testing, and infrastructure as code.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing']
  },
  { 
    icon: BarChart3, 
    title: 'Consulting & Strategy', 
    description: 'Strategic technology consulting to help you make informed decisions and optimize your digital transformation journey.',
    features: ['Digital Strategy', 'Technology Assessment', 'Architecture Design', 'Team Training']
  }
];

export const PROJECTS: Project[] = [
  { 
    title: 'Predictive Maintenance', 
    description: 'AI system for manufacturing equipment failure prediction.', 
    tags: ['ML', 'IoT', 'Python'], 
    icon: Activity 
  },
  { 
    title: 'Customer Service AI', 
    description: 'Natural language processing for automated customer support.', 
    tags: ['NLP', 'Chatbots', 'TensorFlow'], 
    icon: MessageSquare 
  },
  { 
    title: 'Financial Analytics', 
    description: 'Risk assessment and market prediction models for finance sector.', 
    tags: ['Analytics', 'Forecasting', 'PyTorch'], 
    icon: PieChart 
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning platform for business intelligence and predictive analytics.',
    tags: ['Python', 'TensorFlow', 'React'],
    icon: Brain,
    status: 'Live',
    statusColor: 'text-gray-300 bg-white/5'
  },
  {
    title: 'Mobile Banking',
    description: 'Secure and intuitive mobile banking application for African financial institutions.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    icon: Smartphone,
    status: 'In Development',
    statusColor: 'text-gray-300 bg-white/5'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce solution tailored for African markets and payment systems.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    icon: ShoppingCart,
    status: 'Live',
    statusColor: 'text-gray-300 bg-white/5'
  }
];

export const DARK_GRADIENT = 'from-zinc-800 to-black';

export const DOWNLOADS: DownloadItem[] = [
  {
    name: 'Umbra Language',
    version: 'v1.0.0',
    description: 'A modern, high-performance programming language designed for system-level development.',
    platforms: ['Windows', 'Mac', 'Linux'],
    iconLetter: 'U',
    gradient: DARK_GRADIENT
  },
  {
    name: 'Kasi Meals',
    version: 'v1.0.0',
    description: 'Comprehensive meal planning application connecting communities with authentic cuisine.',
    platforms: ['Android', 'iOS', 'Web'],
    iconLetter: 'K',
    gradient: DARK_GRADIENT
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Africa',
    company: 'TechCorp Africa',
    content: 'Eclipse Softworks transformed our data infrastructure with their AI-powered analytics platform. The results exceeded our expectations, delivering 40% improvement in decision-making speed.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, InnovateLabs',
    company: 'InnovateLabs',
    content: 'Working with Eclipse Softworks was a game-changer for our startup. Their expertise in AI and commitment to understanding African markets helped us launch a product that truly resonates with our users.',
    avatar: 'MC'
  },
  {
    name: 'Dr. Nomsa Zulu',
    role: 'Head of Digital Transformation, HealthNet SA',
    company: 'HealthNet SA',
    content: 'The machine learning models developed by Eclipse Softworks have revolutionized our patient care prediction system. Their technical excellence and local market insight are unmatched.',
    avatar: 'NZ'
  }
];