import React from 'react';
import {
    BarChart3, Brain, Smartphone, Shield, Code, Users, Target, Eye, Heart,
    Factory, MessageSquare, PieChart, Cpu, Server, Globe, Zap, Layers,
    GitBranch, Database, Cloud, Lock, Sparkles, Rocket, Award, CheckCircle,
    ArrowRight, Calendar, ChevronRight, Bell, Info, Terminal, Wifi, Link,
    Box, BookOpen, ShoppingCart, Lightbulb, Linkedin,
} from 'lucide-react';

// Icon map for dynamic icon rendering
export const iconMap: Record<string, React.ElementType> = {
    'chart-line': BarChart3,
    'robot': Cpu,
    'mobile-alt': Smartphone,
    'shield-alt': Shield,
    'chart-bar': BarChart3,
    'brain': Brain,
    'code': Code,
    'user-check': Users,
    'industry': Factory,
    'comments': MessageSquare,
    'chart-pie': PieChart,
    'bullseye': Target,
    'eye': Eye,
    'heart': Heart,
    'terminal': Terminal,
    'bell': Bell,
    'info': Info,
    'wifi': Wifi,
    'link': Link,
    'cube': Box,
    'book': BookOpen,
    'shopping-cart': ShoppingCart,
    'lightbulb': Lightbulb,
    'users': Users,
    'linkedin': Linkedin,
    'server': Server,
    'globe': Globe,
    'zap': Zap,
    'database': Database,
    'cloud': Cloud,
    'lock': Lock,
    'sparkles': Sparkles,
    'rocket': Rocket,
    'award': Award,
    'check': CheckCircle,
    'layers': Layers,
    'git-branch': GitBranch,
    'arrow-right': ArrowRight,
    'calendar': Calendar,
    'chevron-right': ChevronRight,
};

interface DynamicIconProps {
    name: string;
    size?: number;
    className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, size = 24, className = '' }) => {
    const IconComponent = iconMap[name] || Sparkles;
    return <IconComponent size={size} className={className} />;
};

export default DynamicIcon;
