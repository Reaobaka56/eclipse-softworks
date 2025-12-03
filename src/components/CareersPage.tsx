import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, MapPin, DollarSign, Heart, Zap,
  Users, Laptop, Star,
  ChevronDown, ArrowRight, ExternalLink, Building2,
  Plane, BookOpen, Dumbbell, Baby, Gift
} from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  remote: boolean;
  salary?: string;
  description: string;
  requirements: string[];
  niceToHave?: string[];
}

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: DollarSign, title: 'Competitive Salary', description: 'Top-tier compensation packages with equity options' },
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive medical, dental, and mental health coverage' },
  { icon: Plane, title: 'Unlimited PTO', description: 'Flexible time off policy to rest and recharge' },
  { icon: Laptop, title: 'Remote-First', description: 'Work from anywhere with home office stipend' },
  { icon: BookOpen, title: 'Learning Budget', description: 'R50,000/year for courses, conferences, and books' },
  { icon: Dumbbell, title: 'Gym Membership', description: 'Stay healthy with covered fitness memberships' },
  { icon: Baby, title: 'Parental Leave', description: '16 weeks paid leave for all new parents' },
  { icon: Gift, title: 'Annual Bonus', description: 'Performance-based bonus up to 20% of salary' },
];

const values = [
  { title: 'Innovation First', description: 'We push boundaries and embrace new ideas', emoji: '🚀' },
  { title: 'Customer Obsession', description: 'Our customers\' success is our success', emoji: '💜' },
  { title: 'Radical Transparency', description: 'We share openly and communicate honestly', emoji: '🔍' },
  { title: 'Inclusive Excellence', description: 'Diverse perspectives drive better outcomes', emoji: '🌍' },
];

const positions: JobPosition[] = [
  {
    id: 'senior-ml-engineer',
    title: 'Senior ML Engineer',
    department: 'Engineering',
    location: 'Johannesburg, SA',
    type: 'full-time',
    remote: true,
    salary: 'R1.2M - R1.8M',
    description: 'Lead the development of our core ML infrastructure, building scalable systems that serve millions of predictions daily.',
    requirements: [
      '5+ years of ML engineering experience',
      'Strong Python and PyTorch/TensorFlow expertise',
      'Experience with distributed systems and MLOps',
      'Track record of deploying models to production',
      'Strong communication skills',
    ],
    niceToHave: [
      'Experience with Kubernetes and cloud platforms',
      'Published research or open source contributions',
      'Experience at a high-growth startup',
    ]
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    department: 'Design',
    location: 'Cape Town, SA',
    type: 'full-time',
    remote: true,
    salary: 'R800K - R1.2M',
    description: 'Shape the future of our product experience, designing intuitive interfaces for complex ML workflows.',
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio showcasing B2B SaaS work',
      'Proficiency in Figma and design systems',
      'Experience with user research and testing',
      'Ability to work closely with engineers',
    ],
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    department: 'Customer Success',
    location: 'Nairobi, KE',
    type: 'full-time',
    remote: true,
    salary: 'R1M - R1.5M',
    description: 'Work with enterprise customers to design and implement ML solutions that drive business value.',
    requirements: [
      '6+ years of technical consulting or solutions architecture',
      'Strong understanding of ML/AI concepts',
      'Excellent presentation and communication skills',
      'Experience with enterprise software sales cycles',
      'Willingness to travel (20-30%)',
    ],
  },
  {
    id: 'devrel-engineer',
    title: 'Developer Relations Engineer',
    department: 'Marketing',
    location: 'Remote',
    type: 'full-time',
    remote: true,
    description: 'Build and nurture our developer community through content, events, and developer experience improvements.',
    requirements: [
      '3+ years as a software engineer or DevRel',
      'Strong technical writing and speaking skills',
      'Active presence in developer communities',
      'Experience creating technical content (blogs, videos, demos)',
    ],
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'Johannesburg, SA',
    type: 'full-time',
    remote: true,
    salary: 'R900K - R1.4M',
    description: 'Build robust, scalable APIs and services that power our ML platform.',
    requirements: [
      '3+ years of backend development experience',
      'Strong experience with Python, Go, or Rust',
      'Experience with PostgreSQL and Redis',
      'Understanding of API design best practices',
      'Experience with cloud infrastructure (AWS/GCP)',
    ],
  },
];

const departments = ['All', 'Engineering', 'Design', 'Customer Success', 'Marketing', 'Sales'];

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  
  const filteredPositions = positions.filter(pos => 
    selectedDepartment === 'All' || pos.department === selectedDepartment
  );
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 mb-6">
            <Briefcase size={16} className="text-purple-400" />
            <span className="text-sm text-purple-400">We're Hiring!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build the Future of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join our mission to democratize AI for enterprises. We're looking for passionate 
            individuals who want to make an impact.
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{positions.length}</div>
              <div className="text-sm text-gray-400">Open Roles</div>
            </div>
          </div>
        </motion.div>
        
        {/* Values */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Eclipse?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
        
        {/* Open Positions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Open Positions</h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/15'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          
          {/* Job Listings */}
          <div className="space-y-4">
            {filteredPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className="glass-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Building2 size={14} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                        {job.remote && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 text-xs">
                            Remote OK
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {job.salary && (
                        <span className="text-sm text-gray-400">{job.salary}</span>
                      )}
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </button>
                
                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-white/20"
                  >
                    <div className="p-6 space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">About the Role</h4>
                        <p className="text-gray-400">{job.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <Star size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {job.niceToHave && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">Nice to Have</h4>
                          <ul className="space-y-2">
                            {job.niceToHave.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                <Zap size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <a 
                        href={`mailto:careers@eclipsesoftworks.com?subject=Application: ${job.title}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Apply Now
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <Briefcase size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No open positions in this department.</p>
            </div>
          )}
        </motion.section>
        
        {/* Don't see your role? */}
        <motion.div 
          className="glass-card p-8 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Users size={40} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Don't See Your Role?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We're always looking for talented people. If you think you'd be a great fit, 
            send us your resume and tell us how you'd contribute.
          </p>
          <a 
            href="mailto:careers@eclipsesoftworks.com?subject=General Application"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Send General Application
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
