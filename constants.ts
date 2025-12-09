import {
  Server, BarChart3, Brain, Activity,
  MessageSquare, PieChart, ShoppingCart,
  Smartphone, Globe, Terminal
} from 'lucide-react';
import {
  NavItem, TeamMember, TeamData, Service, Project, DownloadItem,
  Testimonial, GitHubProject, Stat, CompanyValue, Milestone,
  WhyChooseUsItem, ResourceItem, CaseStudy, TrustedBrand
} from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

// ============================================
// TEAM DATA - Edit team members here
// ============================================

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    initials: 'MK',
    name: 'Moon Khumalo',
    role: 'Founder & CEO',
    specialty: 'AI Systems & Backend',
    description: 'Moon is the visionary founder and CEO of Eclipse Softworks, specializing in AI systems and backend infrastructure. He leads the team with innovation and purpose.',
    linkedin: '#'
  },
  {
    initials: 'XB',
    name: 'Xolani Buthelezi',
    role: 'CTO & Technical Architect',
    specialty: 'System Architecture',
    description: 'Xolani is the Chief Technology Officer and Technical Architect, responsible for the overall technical strategy and system architecture.',
    linkedin: '#'
  },
  {
    initials: 'PM',
    name: 'Philani Makhoba',
    role: 'COO & Front-End Developer',
    specialty: 'Operations & UI/UX',
    description: 'Philani serves as the COO of Eclipse Softworks. A skilled front-end developer, he brings structure and clarity to every project the team undertakes.',
    linkedin: '#'
  }
];

export const DEVELOPMENT_TEAM: TeamMember[] = [
  {
    initials: 'TM',
    name: 'Tshepiso Mokwena',
    role: 'Full-Stack Developer',
    specialty: 'Front-End Focused',
    description: 'Tshepiso is a passionate front-end developer and aspiring full-stack engineer, dedicated to creating impactful user experiences and scalable digital solutions.',
    skills: ['React', 'TypeScript', 'Node.js']
  },
  {
    initials: 'SM',
    name: 'Siphesihle Magudulela',
    role: 'Front-End Developer',
    specialty: 'UI/UX Development',
    description: 'Siphesihle is a dedicated front-end developer with a keen eye for clean interfaces and intuitive user interactions.',
    skills: ['React', 'CSS', 'JavaScript']
  },
  {
    initials: 'KM',
    name: 'Karabo Mothapo',
    role: 'Security Engineer',
    specialty: 'Cybersecurity',
    description: 'Karabo is a security engineer focused on ensuring the safety, integrity, and privacy of all digital systems built by Eclipse Softworks.',
    skills: ['Security', 'Penetration Testing', 'Compliance']
  },
  {
    initials: 'NK',
    name: 'Neo Kganyile',
    role: 'Penetration Tester',
    specialty: 'Security Testing',
    description: 'Neo is an enthusiastic learner and aspiring penetration tester who brings curiosity and a security-first mindset to the team.',
    skills: ['Pen Testing', 'Vulnerability Assessment', 'Ethical Hacking']
  },
  {
    initials: 'NN',
    name: 'Nkanyiso Ndlovu',
    role: 'Systems Engineer',
    specialty: 'Infrastructure & DevOps',
    description: 'Nkanyiso is a systems engineer and coordinator who ensures seamless integration and coordination across all technical systems and team operations.',
    skills: ['DevOps', 'Cloud', 'System Administration']
  }
];

export const BUSINESS_TEAM: TeamMember[] = [
  {
    initials: 'YN',
    name: 'Yongama Nkosi',
    role: 'Accountant',
    specialty: 'Financial Planning',
    description: 'Yongama is a dedicated accountant who ensures Eclipse Softworks maintains financial accuracy and compliance while supporting strategic business decisions.',
    linkedin: '#'
  },
  {
    initials: 'SK',
    name: 'Simphiwe Kubheka',
    role: 'Accountant',
    specialty: 'Financial Analysis',
    description: 'Simphiwe is a meticulous accountant focused on financial planning and analysis, helping Eclipse Softworks achieve sustainable growth and profitability.',
    linkedin: '#'
  }
];

// Combined team data object for easy access
export const TEAM_DATA: TeamData = {
  leadership: LEADERSHIP_TEAM,
  development: DEVELOPMENT_TEAM,
  business: BUSINESS_TEAM
};

// Legacy export (all team members flat array)
export const TEAM_MEMBERS: TeamMember[] = [
  ...LEADERSHIP_TEAM,
  ...DEVELOPMENT_TEAM,
  ...BUSINESS_TEAM
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
    statusColor: 'text-gray-300 bg-white/15'
  },
  {
    title: 'Mobile Banking',
    description: 'Secure and intuitive mobile banking application for African financial institutions.',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    icon: Smartphone,
    status: 'In Development',
    statusColor: 'text-gray-300 bg-white/15'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Scalable e-commerce solution tailored for African markets and payment systems.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    icon: ShoppingCart,
    status: 'Live',
    statusColor: 'text-gray-300 bg-white/15'
  }
];

export const GITHUB_PROJECTS: GitHubProject[] = [
  {
    icon: "box",
    title: "Luna-SDK",
    description: "A development kit to maintain the same architecture across all projects.",
    tags: ["SDK", "Go", "TypeScript", "Python"],
    github: "https://github.com/Eclipse-Softworks/Luna-SDK",
    stars: 0,
    language: "Go",
    docs: "https://docs-lunasdk.eclipse-softworks.com/"
  },
  {
    icon: "layers",
    title: "DomainHive Framework",
    description: "An open-source, domain-specific framework for IoT, mobile development, and microservices with plug-and-play modular architecture.",
    tags: ["TypeScript", "Framework", "IoT"],
    github: "https://github.com/Eclipse-Softworks/domainhive-framework",
    stars: 1,
    language: "TypeScript"
  },
  {
    icon: "bug",
    title: "Eclipse Issue Tracker",
    description: "A secure Spring Boot REST API for managing software issues with JWT authentication and PostgreSQL storage.",
    tags: ["Java", "Spring Boot", "REST API"],
    github: "https://github.com/Eclipse-Softworks/eclipse-issue-tracker",
    stars: 0,
    language: "Java"
  },
  {
    icon: "terminal",
    title: "SvcMgr",
    description: "A cross-platform CLI tool for secure management of server services including SSH, databases, and HTTP with encrypted credential handling.",
    tags: ["Go", "CLI", "DevOps"],
    github: "https://github.com/Eclipse-Softworks/svcmgr",
    stars: 1,
    language: "Go"
  },
  {
    icon: "brain",
    title: "P.A.R.T.N.E.R",
    description: "Predictive Adaptive Real-Time Neural Evaluation & Response - An AI chess assistant written in Go that learns from gameplay through behavioral cloning and provides real-time move suggestions using CNNs.",
    tags: ["Go", "AI", "Machine Learning"],
    github: "https://github.com/Moon9t/P.A.R.T.N.E.R",
    stars: 0,
    language: "Go"
  },
  {
    icon: "shield",
    title: "CLI-H4X",
    description: "Secure TLS relay server with Signal Protocol double-ratchet E2EE, riddle-based registration, IP ban system, and admin monitoring for end-to-end encrypted real-time chat.",
    tags: ["Go", "Security", "Cryptography"],
    github: "https://github.com/Moon9t/CLI-H4X",
    stars: 0,
    language: "Go"
  }
];

export const DARK_GRADIENT = 'from-zinc-800 to-black';

export const DOWNLOADS: DownloadItem[] = [
  {
    name: 'CLI-H4X',
    version: 'v1.0.0',
    description: 'Signal Protocol secure messaging system with end-to-end encryption, double-ratchet algorithm, and TLS 1.3.',
    platforms: ['Windows', 'Linux'],
    iconLetter: 'C',
    gradient: DARK_GRADIENT,
    downloadUrl: 'https://github.com/Moon9t/CLI-H4X/releases/tag/v1.0.0',
    note: 'macOS users: Build from source'
  },
  {
    name: 'SvcMgr',
    version: 'v1.0.0',
    description: 'Cross-platform CLI tool for secure management of server services including SSH, databases, and HTTP with encrypted credentials.',
    platforms: ['Windows', 'Linux'],
    iconLetter: 'S',
    gradient: DARK_GRADIENT,
    downloadUrl: 'https://github.com/Eclipse-Softworks/svcmgr/releases',
    note: 'macOS users: Build from source'
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

// ============================================
// STATS - Edit company statistics here
// ============================================

export const COMPANY_STATS: Stat[] = [
  { val: "3+", label: "Projects Completed" },
  { val: "10+", label: "Team Members" },
  { val: "1+", label: "Years Experience" },
  { val: "100%", label: "Client Satisfaction" }
];

// ============================================
// COMPANY VALUES - Mission, Vision, Values
// ============================================

export const COMPANY_VALUES: CompanyValue[] = [
  {
    icon: "bullseye",
    title: "Our Mission",
    desc: "To empower businesses across Africa with reliable, scalable, and innovative digital solutions that drive measurable impact."
  },
  {
    icon: "eye",
    title: "Our Vision",
    desc: "To become the leading software powerhouse born in Africa — a hub for engineering excellence, creativity, and global innovation."
  },
  {
    icon: "heart",
    title: "Our Values",
    desc: "Integrity, quality, collaboration, and a relentless drive for excellence form the foundation of everything we build."
  }
];

// ============================================
// TIMELINE - Company milestones
// ============================================

export const COMPANY_MILESTONES: Milestone[] = [
  {
    year: '2018',
    title: 'Founded',
    desc: 'Moon founded Eclipse Softworks to build AI solutions for African markets.'
  },
  {
    year: '2020',
    title: 'First Major Client',
    desc: 'Delivered our first enterprise-grade AI system, enabling analytics at scale.'
  },
  {
    year: '2022',
    title: 'Products',
    desc: 'Launched SDK and templates to help accelerate client projects.'
  },
  {
    year: '2024',
    title: 'Expansion',
    desc: 'Expanded team and partnered with major financial institutions.'
  }
];

// ============================================
// WHY CHOOSE US - Differentiators
// ============================================

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  { title: "Local Insight", desc: "Deep understanding of African markets and user behavior." },
  { title: "Technical Expertise", desc: "Proficiency in cutting-edge tools and methodologies." },
  { title: "Collaboration", desc: "We work closely with our clients to bring their vision to life." },
  { title: "Scalability", desc: "Future-proof architecture designed to grow with your business." },
  { title: "Social Impact", desc: "We support initiatives that uplift underserved communities through digital tools and training." }
];

// ============================================
// RESOURCES - Downloads & Resources section
// ============================================

export const RESOURCES: ResourceItem[] = [
  {
    icon: "book",
    title: "API Documentation",
    desc: "Comprehensive documentation and examples for our REST API endpoints.",
    meta: ["Size: PDF", "Version: v1.8"]
  },
  {
    icon: "mobile-alt",
    title: "Mobile Templates",
    desc: "Ready-to-use mobile app templates and UI components for rapid development.",
    meta: ["Size: 120 MB", "Version: v1.5.2"]
  }
];

// ============================================
// CASE STUDIES - Client success stories
// ============================================

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'AI-Powered Financial Analytics Platform',
    client: 'Major African Bank',
    industry: 'Financial Services',
    challenge: 'The client needed to process millions of transactions daily and identify fraud patterns in real-time while maintaining compliance with local regulations.',
    solution: 'We built a custom ML pipeline using TensorFlow and deployed it on a scalable cloud infrastructure with real-time monitoring dashboards.',
    results: [
      '95% fraud detection accuracy',
      '60% reduction in false positives',
      'Processing time reduced from hours to seconds',
      'R50M+ saved in first year'
    ],
    testimonial: 'Eclipse Softworks delivered beyond our expectations. Their understanding of African financial markets was invaluable.',
    testimonialAuthor: 'Chief Digital Officer'
  },
  {
    title: 'Healthcare Predictive Analytics System',
    client: 'HealthNet SA',
    industry: 'Healthcare',
    challenge: 'Predict patient readmission risks and optimize resource allocation across multiple hospital facilities.',
    solution: 'Developed a predictive analytics platform using machine learning models trained on historical patient data with HIPAA-compliant data handling.',
    results: [
      '30% reduction in readmissions',
      '25% improvement in bed utilization',
      'Automated reporting saved 100+ hours monthly',
      'Improved patient outcomes'
    ],
    testimonial: 'The machine learning models have revolutionized our patient care prediction system.',
    testimonialAuthor: 'Dr. Nomsa Zulu, Head of Digital Transformation'
  },
  {
    title: 'E-Commerce Platform for African Markets',
    client: 'Pan-African Retailer',
    industry: 'Retail & E-Commerce',
    challenge: 'Build a scalable e-commerce platform that supports multiple African payment methods and handles low-bandwidth users.',
    solution: 'Created a progressive web app with offline capabilities, integrated M-Pesa, PayFast, and local bank payments, optimized for mobile-first users.',
    results: [
      '300% increase in mobile conversions',
      '50% reduction in cart abandonment',
      'Support for 12 African countries',
      '99.9% uptime achieved'
    ]
  }
];

// ============================================
// TRUSTED BRANDS - For future use
// (Hidden until we have notable brand partnerships)
// ============================================

export const TRUSTED_BRANDS: TrustedBrand[] = [
  // Add brands here when partnerships are established
  // Example:
  // { name: 'TechCorp Africa', logo: '/img/logos/techcorp.svg', industry: 'Technology' },
  // { name: 'AfriBank', logo: '/img/logos/afribank.svg', industry: 'Financial Services' },
  // { name: 'HealthNet SA', logo: '/img/logos/healthnet.svg', industry: 'Healthcare' },
];

// Flag to show/hide trusted brands section
export const SHOW_TRUSTED_BRANDS = false;