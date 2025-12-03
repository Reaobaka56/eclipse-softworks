import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, Bug, Sparkles, Shield, Zap, 
  ChevronDown, Tag, Calendar, ExternalLink, Search,
  AlertTriangle, Info
} from 'lucide-react';

type ChangeType = 'feature' | 'improvement' | 'fix' | 'security' | 'performance' | 'breaking';

interface ChangeItem {
  type: ChangeType;
  description: string;
  details?: string;
  link?: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: ChangeItem[];
  isLatest?: boolean;
}

const changeTypeConfig: Record<ChangeType, { icon: React.ElementType; color: string; label: string }> = {
  feature: { icon: Sparkles, color: 'text-purple-400 bg-purple-400/10', label: 'New Feature' },
  improvement: { icon: Zap, color: 'text-blue-400 bg-blue-400/10', label: 'Improvement' },
  fix: { icon: Bug, color: 'text-orange-400 bg-orange-400/10', label: 'Bug Fix' },
  security: { icon: Shield, color: 'text-emerald-400 bg-emerald-400/10', label: 'Security' },
  performance: { icon: Rocket, color: 'text-cyan-400 bg-cyan-400/10', label: 'Performance' },
  breaking: { icon: AlertTriangle, color: 'text-red-400 bg-red-400/10', label: 'Breaking Change' },
};

const releases: Release[] = [
  {
    version: '2.5.0',
    date: '2025-12-01',
    title: 'Enterprise Security & Performance Update',
    description: 'Major release focusing on enterprise security features, performance optimizations, and new AI capabilities.',
    isLatest: true,
    changes: [
      { type: 'feature', description: 'Advanced AI model fine-tuning capabilities', details: 'Users can now fine-tune models with custom datasets directly in the platform.' },
      { type: 'feature', description: 'Real-time collaboration on ML projects', details: 'Multiple team members can now work simultaneously on the same project.' },
      { type: 'security', description: 'SOC 2 Type II compliance certification', details: 'Completed SOC 2 Type II audit with no findings.' },
      { type: 'security', description: 'Enhanced encryption for data at rest', details: 'Upgraded to AES-256 encryption for all stored data.' },
      { type: 'performance', description: '40% faster model inference', details: 'Optimized inference pipeline with batch processing improvements.' },
      { type: 'improvement', description: 'Redesigned dashboard with dark mode', details: 'New modern interface with improved accessibility.' },
      { type: 'fix', description: 'Fixed memory leak in long-running training jobs' },
      { type: 'fix', description: 'Resolved API timeout issues under high load' },
    ]
  },
  {
    version: '2.4.2',
    date: '2025-11-15',
    title: 'Stability & Bug Fixes',
    description: 'Patch release addressing reported issues and improving system stability.',
    changes: [
      { type: 'fix', description: 'Fixed webhook delivery failures for certain event types' },
      { type: 'fix', description: 'Resolved UI rendering issues in Safari' },
      { type: 'fix', description: 'Corrected timezone handling in scheduled jobs' },
      { type: 'improvement', description: 'Better error messages for API validation failures' },
      { type: 'performance', description: 'Reduced memory usage in data preprocessing' },
    ]
  },
  {
    version: '2.4.0',
    date: '2025-11-01',
    title: 'Analytics & Monitoring Release',
    description: 'New analytics dashboard and enhanced monitoring capabilities for ML operations.',
    changes: [
      { type: 'feature', description: 'Comprehensive ML analytics dashboard', details: 'Track model performance, drift, and usage metrics in real-time.' },
      { type: 'feature', description: 'Custom alerting and notification rules' },
      { type: 'feature', description: 'Integration with Datadog and New Relic' },
      { type: 'improvement', description: 'Enhanced API documentation with interactive examples' },
      { type: 'security', description: 'Added support for SAML SSO' },
      { type: 'breaking', description: 'Deprecated v1 API endpoints', details: 'V1 API will be removed in version 3.0. Please migrate to v2.' },
    ]
  },
  {
    version: '2.3.0',
    date: '2025-10-15',
    title: 'Multi-Cloud Support',
    description: 'Deploy and manage models across multiple cloud providers.',
    changes: [
      { type: 'feature', description: 'Support for AWS, GCP, and Azure deployments' },
      { type: 'feature', description: 'Cross-cloud model migration tools' },
      { type: 'feature', description: 'Kubernetes operator for self-hosted deployments' },
      { type: 'improvement', description: 'Improved model versioning system' },
      { type: 'performance', description: 'Optimized container startup time by 60%' },
      { type: 'fix', description: 'Fixed race condition in concurrent model updates' },
    ]
  },
  {
    version: '2.2.0',
    date: '2025-09-20',
    title: 'Team Collaboration Features',
    description: 'Enhanced team features including roles, permissions, and audit logging.',
    changes: [
      { type: 'feature', description: 'Role-based access control (RBAC)' },
      { type: 'feature', description: 'Comprehensive audit logging' },
      { type: 'feature', description: 'Team workspaces and project sharing' },
      { type: 'security', description: 'Added IP allowlisting for API access' },
      { type: 'improvement', description: 'Improved onboarding flow for new users' },
    ]
  },
];

const ChangelogPage: React.FC = () => {
  const [expandedRelease, setExpandedRelease] = useState<string | null>(releases[0].version);
  const [filterType, setFilterType] = useState<ChangeType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredReleases = releases.map(release => ({
    ...release,
    changes: release.changes.filter(change => {
      const matchesType = filterType === 'all' || change.type === filterType;
      const matchesSearch = searchQuery === '' || 
        change.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        change.details?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    })
  })).filter(release => release.changes.length > 0 || searchQuery === '');
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6">
            <Tag size={16} className="text-gray-400" />
            <span className="text-sm text-gray-300">v{releases[0].version}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span className="text-sm text-gray-500">{releases[0].date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">Changelog</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track all updates, improvements, and fixes to Eclipse Softworks platform. 
            We ship updates regularly to improve your experience.
          </p>
        </motion.div>
        
        {/* Filters */}
        <motion.div 
          className="glass-card p-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search changes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/20"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filterType === 'all' 
                    ? 'bg-white/10 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-white/15'
                }`}
              >
                All
              </button>
              {(Object.keys(changeTypeConfig) as ChangeType[]).map(type => {
                const config = changeTypeConfig[type];
                const Icon = config.icon;
                return (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                      filterType === type 
                        ? config.color
                        : 'text-gray-400 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    <Icon size={12} />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
        
        {/* Releases */}
        <div className="space-y-6">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.version}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              {/* Release Header */}
              <button
                onClick={() => setExpandedRelease(expandedRelease === release.version ? null : release.version)}
                className="w-full p-6 text-left flex items-start justify-between hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg font-bold text-white">v{release.version}</span>
                    {release.isLatest && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-400/10 text-emerald-400">
                        Latest
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={12} />
                      {release.date}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{release.title}</h3>
                  <p className="text-sm text-gray-400">{release.description}</p>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform ${expandedRelease === release.version ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Release Changes */}
              {expandedRelease === release.version && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-t border-white/20"
                >
                  <div className="p-6 space-y-3">
                    {release.changes.map((change, i) => {
                      const config = changeTypeConfig[change.type];
                      const Icon = config.icon;
                      return (
                        <div key={i} className="flex gap-3">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ${config.color}`}>
                            <Icon size={14} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white">{change.description}</p>
                            {change.details && (
                              <p className="text-xs text-gray-500 mt-1">{change.details}</p>
                            )}
                            {change.link && (
                              <a 
                                href={change.link}
                                className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white mt-1"
                              >
                                Learn more <ExternalLink size={10} />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Subscribe */}
        <motion.div 
          className="glass-card p-8 text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Info size={32} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-6">
            Subscribe to our newsletter to get notified about new releases and features.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-black/70 border border-white/20 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/20"
            />
            <button className="px-6 py-2 bg-white text-black font-semibold text-sm rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChangelogPage;
