import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Clock,
  Quote, ArrowRight, ChevronLeft,
  ExternalLink, Award
} from 'lucide-react';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  technologies: string[];
  timeline: string;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'finbank-fraud',
    company: 'FinBank Africa',
    industry: 'Financial Services',
    logo: '🏦',
    title: 'Reducing Fraud Losses by 60% with Real-Time ML',
    subtitle: 'How Africa\'s leading digital bank transformed fraud detection',
    challenge: 'FinBank was losing over R50M annually to fraudulent transactions. Their rule-based system had a 40% false positive rate, frustrating legitimate customers and overwhelming their operations team.',
    solution: 'Eclipse deployed a real-time ML pipeline that analyzes 200+ signals per transaction. The model learns from historical fraud patterns and adapts to new threats in real-time, while maintaining sub-100ms latency.',
    results: [
      { metric: '60%', value: 'Reduction in Fraud', description: 'Annual fraud losses dropped from R50M to R20M' },
      { metric: '85%', value: 'Fewer False Positives', description: 'Customer friction significantly reduced' },
      { metric: '<50ms', value: 'Decision Latency', description: 'Real-time fraud scoring at scale' },
      { metric: 'R30M', value: 'Annual Savings', description: 'Direct impact on bottom line' },
    ],
    quote: {
      text: 'Eclipse transformed our fraud detection capabilities. The reduction in false positives alone has dramatically improved customer satisfaction.',
      author: 'Dr. Themba Nkosi',
      role: 'Chief Risk Officer, FinBank Africa'
    },
    technologies: ['Real-time ML', 'Feature Store', 'A/B Testing', 'Model Monitoring'],
    timeline: '8 weeks to production',
    featured: true
  },
  {
    id: 'healthco-diagnosis',
    company: 'HealthCo Medical',
    industry: 'Healthcare',
    logo: '🏥',
    title: 'AI-Assisted Diagnosis Improving Patient Outcomes',
    subtitle: 'Deploying clinical decision support across 50 hospitals',
    challenge: 'HealthCo needed to improve diagnostic accuracy while reducing physician workload. Their radiologists were reviewing thousands of images daily with limited AI assistance.',
    solution: 'Eclipse helped HealthCo deploy HIPAA-compliant AI models for radiology, pathology, and clinical notes analysis. The platform integrates with existing EMR systems and provides explainable predictions.',
    results: [
      { metric: '23%', value: 'Faster Diagnosis', description: 'Reduced time from scan to report' },
      { metric: '15%', value: 'Improved Accuracy', description: 'Fewer missed findings in initial review' },
      { metric: '50', value: 'Hospitals Deployed', description: 'Scaled across entire network' },
      { metric: '2M', value: 'Patients Served', description: 'Annual patient volume supported' },
    ],
    quote: {
      text: 'The explainability features were crucial for physician adoption. Our doctors trust the AI because they understand why it makes recommendations.',
      author: 'Prof. Sarah Mbeki',
      role: 'Chief Medical Officer, HealthCo'
    },
    technologies: ['Computer Vision', 'NLP', 'Explainable AI', 'HIPAA Compliance'],
    timeline: '6 months to full deployment',
  },
  {
    id: 'retailmax-personalization',
    company: 'RetailMax',
    industry: 'E-commerce',
    logo: '🛒',
    title: 'Personalization Engine Driving 35% Revenue Growth',
    subtitle: 'Building Africa\'s most advanced recommendation system',
    challenge: 'RetailMax\'s e-commerce platform served 10M+ customers but struggled with generic product recommendations. Conversion rates were flat despite growing traffic.',
    solution: 'Eclipse built a comprehensive personalization engine combining collaborative filtering, content-based recommendations, and real-time behavioral signals to deliver personalized experiences.',
    results: [
      { metric: '35%', value: 'Revenue Increase', description: 'Attributed to personalization' },
      { metric: '2.4x', value: 'Click-through Rate', description: 'On personalized recommendations' },
      { metric: '28%', value: 'Higher AOV', description: 'Average order value improvement' },
      { metric: '10M+', value: 'Users Personalized', description: 'Real-time at scale' },
    ],
    quote: {
      text: 'The results exceeded our expectations. Eclipse\'s platform handles our scale effortlessly and continues to improve as it learns from customer behavior.',
      author: 'Michael Okonkwo',
      role: 'VP of Product, RetailMax'
    },
    technologies: ['Recommendation Systems', 'Real-time Features', 'A/B Testing', 'Analytics'],
    timeline: '12 weeks to production',
  },
  {
    id: 'manutech-predictive',
    company: 'ManuTech Industries',
    industry: 'Manufacturing',
    logo: '🏭',
    title: 'Predictive Maintenance Reducing Downtime by 45%',
    subtitle: 'IoT and ML transforming factory operations',
    challenge: 'Unplanned equipment failures were costing ManuTech millions in lost production and emergency repairs. Traditional maintenance schedules were inefficient and often too late.',
    solution: 'Eclipse integrated with ManuTech\'s IoT sensors to build predictive maintenance models. The system analyzes vibration, temperature, and operational data to predict failures before they happen.',
    results: [
      { metric: '45%', value: 'Less Downtime', description: 'Unplanned downtime reduction' },
      { metric: 'R15M', value: 'Annual Savings', description: 'Maintenance cost reduction' },
      { metric: '7 days', value: 'Prediction Window', description: 'Average advance warning' },
      { metric: '500+', value: 'Machines Monitored', description: 'Across 5 facilities' },
    ],
    quote: {
      text: 'We now fix equipment before it breaks. The ROI was clear within the first quarter of deployment.',
      author: 'Johan van der Berg',
      role: 'Operations Director, ManuTech'
    },
    technologies: ['IoT Integration', 'Time Series ML', 'Edge Deployment', 'Alerting'],
    timeline: '16 weeks to production',
  },
];

const industries = ['All', 'Financial Services', 'Healthcare', 'E-commerce', 'Manufacturing'];

const CaseStudiesPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  
  const filteredStudies = caseStudies.filter(study => 
    selectedIndustry === 'All' || study.industry === selectedIndustry
  );
  
  const featuredStudy = caseStudies.find(s => s.featured);
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6">
            <Award size={16} className="text-gray-400" />
            <span className="text-sm text-gray-300">Customer Success Stories</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See how leading organizations across industries are transforming their businesses 
            with Eclipse's AI platform.
          </p>
        </motion.div>
        
        {/* Featured Case Study */}
        {featuredStudy && selectedIndustry === 'All' && (
          <motion.div 
            className="glass-card overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{featuredStudy.logo}</span>
                  <div>
                    <h3 className="text-white font-semibold">{featuredStudy.company}</h3>
                    <span className="text-xs text-gray-500">{featuredStudy.industry}</span>
                  </div>
                  <span className="ml-auto px-3 py-1 text-xs font-medium rounded-full bg-purple-400/10 text-purple-400">
                    Featured
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3">{featuredStudy.title}</h2>
                <p className="text-gray-400 mb-6">{featuredStudy.subtitle}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {featuredStudy.results.slice(0, 4).map((result, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/30 border border-white/5">
                      <div className="text-2xl font-bold text-white">{result.metric}</div>
                      <div className="text-xs text-gray-500">{result.value}</div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedCase(featuredStudy)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Read Full Story
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-black/30 rounded-xl p-6 border border-white/5">
                  <Quote size={32} className="text-gray-600 mb-4" />
                  <p className="text-gray-300 italic mb-4">"{featuredStudy.quote.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg">
                      👤
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{featuredStudy.quote.author}</div>
                      <div className="text-xs text-gray-500">{featuredStudy.quote.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Industry Filter */}
        <motion.div 
          className="flex flex-wrap gap-2 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {industries.map(industry => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                selectedIndustry === industry
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/15'
              }`}
            >
              {industry}
            </button>
          ))}
        </motion.div>
        
        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredStudies.filter(s => selectedIndustry !== 'All' || !s.featured).map((study, index) => (
            <motion.div
              key={study.id}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedCase(study)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{study.logo}</span>
                  <div>
                    <h3 className="text-white font-semibold">{study.company}</h3>
                    <span className="text-xs text-gray-500">{study.industry}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                  {study.title}
                </h4>
                <p className="text-sm text-gray-400 mb-4">{study.subtitle}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {study.results.slice(0, 2).map((result, i) => (
                    <div key={i} className="p-2 rounded-lg bg-black/30">
                      <div className="text-xl font-bold text-white">{result.metric}</div>
                      <div className="text-xs text-gray-500">{result.value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={14} />
                    {study.timeline}
                  </div>
                  <span className="text-white group-hover:text-gray-200 flex items-center gap-1">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Case Study Modal */}
        {selectedCase && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              className="glass-card max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedCase.logo}</span>
                    <div>
                      <h3 className="text-white font-semibold">{selectedCase.company}</h3>
                      <span className="text-sm text-gray-500">{selectedCase.industry}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCase(null)}
                    className="p-2 hover:bg-white/15 rounded-lg"
                  >
                    <ChevronLeft size={20} className="text-gray-400" />
                  </button>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">{selectedCase.title}</h2>
                <p className="text-gray-400 mb-8">{selectedCase.subtitle}</p>
                
                {/* Challenge */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-red-400">Challenge</span>
                  </h4>
                  <p className="text-gray-400">{selectedCase.challenge}</p>
                </div>
                
                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-blue-400">Solution</span>
                  </h4>
                  <p className="text-gray-400">{selectedCase.solution}</p>
                </div>
                
                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-emerald-400">Results</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedCase.results.map((result, i) => (
                      <div key={i} className="p-4 rounded-lg bg-black/30 border border-white/5">
                        <div className="text-3xl font-bold text-white mb-1">{result.metric}</div>
                        <div className="text-sm text-gray-300 font-medium">{result.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <div className="bg-white/15 rounded-xl p-6 mb-8">
                  <Quote size={24} className="text-gray-600 mb-3" />
                  <p className="text-gray-300 italic mb-4">"{selectedCase.quote.text}"</p>
                  <div className="text-white font-semibold">{selectedCase.quote.author}</div>
                  <div className="text-sm text-gray-500">{selectedCase.quote.role}</div>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedCase.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/15 text-gray-300 border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="flex items-center gap-4">
                  <a 
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Get Similar Results
                    <ArrowRight size={16} />
                  </a>
                  <span className="text-sm text-gray-500">
                    <Clock size={14} className="inline mr-1" />
                    {selectedCase.timeline}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* CTA */}
        <motion.div 
          className="glass-card p-8 text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TrendingUp size={40} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Business?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join hundreds of enterprises achieving extraordinary results with Eclipse. 
            Let's discuss how AI can drive impact for your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
              <ArrowRight size={16} />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Talk to Sales
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
