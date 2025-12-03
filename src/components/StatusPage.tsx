import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, AlertCircle, Clock, Server, Database, 
  Globe, Shield, Activity, Zap, RefreshCw, ExternalLink,
  ChevronDown, ChevronUp
} from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: number;
  responseTime: number;
  icon: React.ElementType;
  description: string;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  date: string;
  description: string;
  updates: { time: string; message: string }[];
}

const services: ServiceStatus[] = [
  { 
    name: 'API Gateway', 
    status: 'operational', 
    uptime: 99.99, 
    responseTime: 45,
    icon: Server,
    description: 'Primary API endpoints and authentication services'
  },
  { 
    name: 'Web Application', 
    status: 'operational', 
    uptime: 99.98, 
    responseTime: 120,
    icon: Globe,
    description: 'Main web application and dashboard'
  },
  { 
    name: 'Database Cluster', 
    status: 'operational', 
    uptime: 99.99, 
    responseTime: 12,
    icon: Database,
    description: 'Primary and replica database servers'
  },
  { 
    name: 'ML Pipeline', 
    status: 'operational', 
    uptime: 99.95, 
    responseTime: 850,
    icon: Activity,
    description: 'Machine learning inference and training pipelines'
  },
  { 
    name: 'CDN', 
    status: 'operational', 
    uptime: 99.99, 
    responseTime: 18,
    icon: Zap,
    description: 'Content delivery network for static assets'
  },
  { 
    name: 'Security Services', 
    status: 'operational', 
    uptime: 100, 
    responseTime: 5,
    icon: Shield,
    description: 'Authentication, authorization, and security monitoring'
  },
];

const recentIncidents: Incident[] = [
  {
    id: '1',
    title: 'Scheduled Maintenance - Database Optimization',
    status: 'resolved',
    date: '2025-11-28',
    description: 'Planned maintenance window for database performance optimization.',
    updates: [
      { time: '06:00 SAST', message: 'Maintenance completed successfully. All services restored.' },
      { time: '04:00 SAST', message: 'Database optimization in progress.' },
      { time: '03:00 SAST', message: 'Maintenance window started.' },
    ]
  },
  {
    id: '2',
    title: 'API Latency Increase',
    status: 'resolved',
    date: '2025-11-15',
    description: 'Increased latency observed on API endpoints due to traffic spike.',
    updates: [
      { time: '15:30 SAST', message: 'Auto-scaling completed. Latency returned to normal levels.' },
      { time: '14:45 SAST', message: 'Identified traffic spike from new client onboarding. Scaling resources.' },
      { time: '14:30 SAST', message: 'Investigating increased latency on API endpoints.' },
    ]
  },
];

const getStatusColor = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational': return 'text-emerald-400';
    case 'degraded': return 'text-yellow-400';
    case 'outage': return 'text-red-400';
    case 'maintenance': return 'text-blue-400';
  }
};

const getStatusBg = (status: ServiceStatus['status']) => {
  switch (status) {
    case 'operational': return 'bg-emerald-400';
    case 'degraded': return 'bg-yellow-400';
    case 'outage': return 'bg-red-400';
    case 'maintenance': return 'bg-blue-400';
  }
};

const getIncidentStatusColor = (status: Incident['status']) => {
  switch (status) {
    case 'investigating': return 'text-red-400 bg-red-400/10';
    case 'identified': return 'text-yellow-400 bg-yellow-400/10';
    case 'monitoring': return 'text-blue-400 bg-blue-400/10';
    case 'resolved': return 'text-emerald-400 bg-emerald-400/10';
  }
};

const StatusIndicator: React.FC<{ status: ServiceStatus['status'] }> = ({ status }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full ${getStatusBg(status)} ${status === 'operational' ? 'animate-pulse' : ''}`} />
    <span className={`text-xs font-medium capitalize ${getStatusColor(status)}`}>
      {status}
    </span>
  </div>
);

const ServiceCard: React.FC<{ service: ServiceStatus; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      className="glass-card p-4 hover:border-white/20 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center">
            <Icon size={20} className="text-gray-300" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">{service.name}</h3>
            <p className="text-xs text-gray-500">{service.description}</p>
          </div>
        </div>
        <StatusIndicator status={service.status} />
      </div>
      
      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/20">
        <div>
          <p className="text-xs text-gray-500 mb-1">Uptime (30d)</p>
          <p className="text-sm font-mono text-white">{service.uptime}%</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Response Time</p>
          <p className="text-sm font-mono text-white">{service.responseTime}ms</p>
        </div>
      </div>
    </motion.div>
  );
};

const IncidentCard: React.FC<{ incident: Incident }> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="glass-card p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${getIncidentStatusColor(incident.status)}`}>
              {incident.status}
            </span>
            <span className="text-xs text-gray-500">{incident.date}</span>
          </div>
          <h4 className="font-semibold text-white text-sm">{incident.title}</h4>
          <p className="text-xs text-gray-400 mt-1">{incident.description}</p>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-gray-400 hover:text-white p-1"
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-3 pt-3 border-t border-white/20 space-y-2"
        >
          {incident.updates.map((update, i) => (
            <div key={i} className="flex gap-3 text-xs">
              <span className="text-gray-500 font-mono whitespace-nowrap">{update.time}</span>
              <span className="text-gray-300">{update.message}</span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const StatusPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const allOperational = services.every(s => s.status === 'operational');
  const overallUptime = (services.reduce((acc, s) => acc + s.uptime, 0) / services.length).toFixed(2);
  
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 mb-6">
            {allOperational ? (
              <>
                <CheckCircle size={16} className="text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">All Systems Operational</span>
              </>
            ) : (
              <>
                <AlertCircle size={16} className="text-yellow-400" />
                <span className="text-sm text-yellow-400 font-medium">Partial System Outage</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">System Status</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time status and uptime information for Eclipse Softworks services. 
            We monitor our systems 24/7 to ensure maximum reliability.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
            <button 
              onClick={handleRefresh}
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              disabled={isRefreshing}
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
          </div>
        </motion.div>
        
        {/* Overall Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-card p-6 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Overall Uptime</p>
            <p className="text-3xl font-bold text-white font-mono">{overallUptime}%</p>
            <p className="text-xs text-gray-400 mt-1">Last 30 days</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Active Services</p>
            <p className="text-3xl font-bold text-emerald-400 font-mono">
              {services.filter(s => s.status === 'operational').length}/{services.length}
            </p>
            <p className="text-xs text-gray-400 mt-1">Services online</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Avg Response Time</p>
            <p className="text-3xl font-bold text-white font-mono">
              {Math.round(services.reduce((acc, s) => acc + s.responseTime, 0) / services.length)}ms
            </p>
            <p className="text-xs text-gray-400 mt-1">API endpoints</p>
          </div>
        </motion.div>
        
        {/* Services Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </div>
        </div>
        
        {/* Recent Incidents */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            {recentIncidents.length > 0 ? (
              recentIncidents.map(incident => (
                <IncidentCard key={incident.id} incident={incident} />
              ))
            ) : (
              <div className="glass-card p-8 text-center">
                <CheckCircle size={32} className="text-emerald-400 mx-auto mb-3" />
                <p className="text-gray-300">No incidents reported in the last 90 days</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Subscribe to Updates */}
        <motion.div 
          className="glass-card p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-bold text-white mb-2">Subscribe to Status Updates</h3>
          <p className="text-sm text-gray-400 mb-6">
            Get notified via email when there are service disruptions or scheduled maintenance.
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
        
        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <a href="https://twitter.com/eclipsesw" className="flex items-center gap-1 hover:text-white transition-colors">
            <ExternalLink size={12} />
            @eclipsesw on Twitter
          </a>
          <a href="mailto:status@eclipse-softworks.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <ExternalLink size={12} />
            status@eclipse-softworks.com
          </a>
          <a href="/security" className="flex items-center gap-1 hover:text-white transition-colors">
            <ExternalLink size={12} />
            Security
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
