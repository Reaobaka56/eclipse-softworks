import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2, Brain, Database, Hexagon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechItem { 
  name: string; 
  icon: LucideIcon; 
  color?: string;
}

const DEFAULT_STACK: TechItem[] = [
  { name: 'React', icon: Layers, color: 'text-blue-400' },
  { name: 'TypeScript', icon: Code2, color: 'text-sky-400' },
  { name: 'Node.js', icon: Hexagon, color: 'text-green-400' },
  { name: 'Python', icon: Code2, color: 'text-yellow-400' },
  { name: 'TensorFlow', icon: Brain, color: 'text-orange-400' },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' }
];

const TechStack: React.FC<{ items?: TechItem[] }> = ({ items = DEFAULT_STACK }) => {
  return (
    <div className="glass-card p-6 mb-16">
      <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
      <p className="text-sm text-gray-400 mb-6">Our engineers use modern, battle-tested technologies to build resilient and scalable products.</p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {items.map((t, i) => {
          const IconComponent = t.icon;
          return (
            <motion.div 
              key={i} 
              className="flex items-center justify-center p-3 rounded bg-white/15 text-white text-sm transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105 cursor-default" 
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <IconComponent size={20} className={`mr-2 ${t.color || 'text-gray-300'}`} />
              <span className="text-xs">{t.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
