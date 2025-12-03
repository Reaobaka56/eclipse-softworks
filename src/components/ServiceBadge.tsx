import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, Brain, Globe, Smartphone, Terminal, Server, BarChart3, Code, Shield, Cpu, Database, Cloud, Zap, Users, Target, Eye, Layers, GitBranch, Lock, Sparkles, Rocket, Award, CheckCircle } from 'lucide-react';

// Map common icon names to Lucide icons
const iconMap: Record<string, LucideIcon> = {
  // Tech stack
  'python': Brain,
  'ml': Brain,
  'react': Layers,
  'mobile': Smartphone,
  'saas': Cloud,
  'terminal': Terminal,
  'code': Code,
  'database': Database,
  'server': Server,
  'cloud': Cloud,
  'api': GitBranch,
  'security': Shield,
  'lock': Lock,
  'cpu': Cpu,
  'ai': Sparkles,
  'rocket': Rocket,
  'award': Award,
  'check': CheckCircle,
  // Solutions
  'chart-line': BarChart3,
  'robot': Cpu,
  'mobile-alt': Smartphone,
  'shield-alt': Shield,
  'chart-bar': BarChart3,
  'brain': Brain,
  'user-check': Users,
  'industry': Server,
  'comments': Users,
  'chart-pie': BarChart3,
  'bullseye': Target,
  'eye': Eye,
  'zap': Zap,
  'globe': Globe,
};

interface ServiceBadgeProps {
  icon: string | LucideIcon;
  label?: string;
  variant?: 'default' | 'primary' | 'success';
}

const ServiceBadge: React.FC<ServiceBadgeProps> = ({ icon, label, variant = 'default' }) => {
  // Determine if it's a Lucide component or string
  const isLucideComponent = typeof icon === 'function';
  
  // Get Lucide icon from map if string
  const getLucideIcon = (iconStr: string): LucideIcon | null => {
    // Extract icon name from FA class (e.g., "fa-brands fa-python" -> "python")
    const match = iconStr.match(/fa-(?:solid |brands )?fa-([\w-]+)/) || iconStr.match(/fa-([\w-]+)/);
    const iconName = match ? match[1] : iconStr.toLowerCase();
    return iconMap[iconName] || null;
  };
  
  const LucideIconComponent = isLucideComponent ? (icon as LucideIcon) : getLucideIcon(icon as string);
  
  const variantClasses = {
    default: 'bg-white/15 text-gray-200 border-white/20',
    primary: 'bg-white/10 text-white border-white/20',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };
  
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium border ${variantClasses[variant]}`}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {LucideIconComponent ? (
        <LucideIconComponent size={14} aria-hidden="true" />
      ) : (
        <i className={`${icon} text-sm`} aria-hidden="true"></i>
      )}
      {label && <span>{label}</span>}
    </motion.div>
  );
};

export default ServiceBadge;
