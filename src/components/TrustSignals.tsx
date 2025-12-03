import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Zap, Lock, CheckCircle, Globe } from 'lucide-react';

interface TrustBadgeProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="flex items-start gap-3 p-4"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center">
      <Icon size={20} className="text-gray-300" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
      <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const TrustSignals: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 Type II compliant infrastructure with end-to-end encryption'
    },
    {
      icon: Clock,
      title: '99.9% Uptime SLA',
      description: 'Guaranteed reliability with 24/7 monitoring and support'
    },
    {
      icon: Lock,
      title: 'POPIA & GDPR Compliant',
      description: 'Full compliance with international data protection regulations'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'From concept to production in weeks, not months'
    }
  ];

  return (
    <section className="py-12 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Why Choose Us</span>
          <h3 className="text-xl font-bold text-white mt-2">Built for Enterprise</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {badges.map((badge, index) => (
            <TrustBadge key={index} {...badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Enterprise metrics component
export const EnterpriseMetrics: React.FC = () => {
  const metrics = [
    { value: '50+', label: 'Projects Delivered', icon: CheckCircle },
    { value: '99.9%', label: 'Client Satisfaction', icon: Award },
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '10+', label: 'Countries Served', icon: Globe },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <metric.icon size={24} className="mx-auto mb-2 text-gray-400" />
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Client logos / social proof placeholder
export const ClientLogos: React.FC = () => {
  const clients = [
    'Fortune 500',
    'Startups',
    'Government',
    'Healthcare',
    'Finance',
    'Retail'
  ];

  return (
    <div className="py-8 border-y border-white/20">
      <p className="text-xs text-gray-500 text-center uppercase tracking-widest mb-6">
        Trusted by organizations across industries
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
        {clients.map((client, index) => (
          <motion.div
            key={index}
            className="text-sm font-medium text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {client}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Security certifications
export const SecurityBadges: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 border border-white/20">
        <Shield size={16} className="text-emerald-400" />
        <span className="text-xs font-medium text-gray-300">SOC 2</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 border border-white/20">
        <Lock size={16} className="text-emerald-400" />
        <span className="text-xs font-medium text-gray-300">POPIA</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 border border-white/20">
        <Globe size={16} className="text-emerald-400" />
        <span className="text-xs font-medium text-gray-300">GDPR</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/15 border border-white/20">
        <Zap size={16} className="text-emerald-400" />
        <span className="text-xs font-medium text-gray-300">ISO 27001</span>
      </div>
    </div>
  );
};

export default TrustSignals;
