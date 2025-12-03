import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Server, Key, FileCheck, Users,
  CheckCircle, ExternalLink, Download, AlertTriangle,
  Building2, Globe, Award, Zap, Database
} from 'lucide-react';

interface Certification {
  name: string;
  description: string;
  icon: React.ElementType;
  status: 'certified' | 'in-progress' | 'planned';
  date?: string;
}

interface SecurityFeature {
  title: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

const certifications: Certification[] = [
  { 
    name: 'SOC 2 Type II', 
    description: 'Annual audit of security, availability, and confidentiality controls',
    icon: Award,
    status: 'certified',
    date: '2025'
  },
  { 
    name: 'ISO 27001', 
    description: 'International standard for information security management',
    icon: Shield,
    status: 'certified',
    date: '2024'
  },
  { 
    name: 'GDPR Compliant', 
    description: 'European Union data protection regulation compliance',
    icon: Globe,
    status: 'certified',
    date: '2023'
  },
  { 
    name: 'POPIA Compliant', 
    description: 'Protection of Personal Information Act (South Africa)',
    icon: FileCheck,
    status: 'certified',
    date: '2023'
  },
  { 
    name: 'HIPAA', 
    description: 'Health Insurance Portability and Accountability Act',
    icon: Building2,
    status: 'in-progress',
  },
  { 
    name: 'PCI DSS', 
    description: 'Payment Card Industry Data Security Standard',
    icon: Key,
    status: 'planned',
  },
];

const securityFeatures: SecurityFeature[] = [
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data in transit and at rest.',
    icon: Lock,
    details: [
      'AES-256 encryption for data at rest',
      'TLS 1.3 for all data in transit',
      'Customer-managed encryption keys (BYOK)',
      'Hardware security modules (HSM) for key storage',
    ]
  },
  {
    title: 'Access Control',
    description: 'Fine-grained permissions and role-based access control.',
    icon: Users,
    details: [
      'Role-based access control (RBAC)',
      'Single sign-on (SSO) with SAML 2.0',
      'Multi-factor authentication (MFA)',
      'IP allowlisting',
      'Session management and timeouts',
    ]
  },
  {
    title: 'Infrastructure Security',
    description: 'Enterprise-grade infrastructure with multiple layers of protection.',
    icon: Server,
    details: [
      'Hosted on AWS with SOC 2 compliance',
      'DDoS protection and WAF',
      'Network segmentation and firewalls',
      'Regular vulnerability scanning',
      'Intrusion detection systems',
    ]
  },
  {
    title: 'Monitoring & Logging',
    description: 'Comprehensive audit trails and real-time monitoring.',
    icon: Eye,
    details: [
      'Complete audit logging of all actions',
      'Real-time security monitoring',
      '24/7 incident response team',
      'Log retention for 7 years',
      'Automated threat detection',
    ]
  },
  {
    title: 'Data Privacy',
    description: 'Your data belongs to you. Full control and transparency.',
    icon: Database,
    details: [
      'Data residency options (US, EU, SA)',
      'Data processing agreements (DPA)',
      'Right to erasure / data deletion',
      'Data portability and export',
      'Privacy impact assessments',
    ]
  },
  {
    title: 'Business Continuity',
    description: 'Designed for reliability with disaster recovery built-in.',
    icon: Zap,
    details: [
      '99.99% uptime SLA',
      'Multi-region failover',
      'Automated backups every hour',
      'Disaster recovery plan',
      'Regular DR testing',
    ]
  },
];

const SecurityPage: React.FC = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 mb-6">
            <Shield size={16} className="text-emerald-400" />
            <span className="text-sm text-emerald-400">Enterprise Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security at <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Eclipse</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We take security seriously. Our platform is built with enterprise-grade security 
            at its core, ensuring your data and models are protected at all times.
          </p>
        </motion.div>
        
        {/* Trust Banner */}
        <motion.div 
          className="glass-card p-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">AES-256</div>
              <div className="text-sm text-gray-400">Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Security Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">SOC 2</div>
              <div className="text-sm text-gray-400">Type II Certified</div>
            </div>
          </div>
        </motion.div>
        
        {/* Certifications */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Compliance & Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.name}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      cert.status === 'certified' 
                        ? 'bg-emerald-400/10 text-emerald-400' 
                        : cert.status === 'in-progress'
                        ? 'bg-yellow-400/10 text-yellow-400'
                        : 'bg-gray-400/10 text-gray-400'
                    }`}>
                      {cert.status === 'certified' ? `Certified ${cert.date}` : 
                       cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
        
        {/* Security Features */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isExpanded = expandedFeature === feature.title;
              
              return (
                <motion.div
                  key={feature.title}
                  className="glass-card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <button
                    onClick={() => setExpandedFeature(isExpanded ? null : feature.title)}
                    className="w-full p-6 text-left flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-white/20">
                        <ul className="space-y-2">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>
        
        {/* Responsible Disclosure */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} className="text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Responsible Disclosure</h3>
                <p className="text-gray-400 mb-4">
                  Found a security vulnerability? We appreciate your help in keeping Eclipse secure. 
                  Please report any security issues responsibly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:security@eclipsesoftworks.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/20 rounded-lg text-sm text-white hover:bg-white/20 transition-colors"
                  >
                    security@eclipsesoftworks.com
                    <ExternalLink size={14} />
                  </a>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/20 rounded-lg text-sm text-white hover:bg-white/20 transition-colors"
                  >
                    Bug Bounty Program
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Downloads */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Security Documentation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Security Whitepaper', desc: 'Comprehensive overview of our security architecture', size: '2.4 MB' },
              { name: 'SOC 2 Report', desc: 'Latest SOC 2 Type II audit report', size: '1.8 MB' },
              { name: 'Privacy Policy', desc: 'How we collect, use, and protect your data', size: '320 KB' },
            ].map((doc, i) => (
              <motion.a
                key={doc.name}
                href="#"
                className="glass-card p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Download size={20} className="text-gray-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{doc.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{doc.desc}</p>
                  <span className="text-xs text-gray-600">PDF • {doc.size}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
        
        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 mb-6">
            Have questions about our security practices? Our security team is here to help.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Security Team
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityPage;
