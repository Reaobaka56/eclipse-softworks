import React from 'react';
import { motion } from 'framer-motion';

interface TechItem { name: string; icon: string; color?: string }

const DEFAULT_STACK: TechItem[] = [
  { name: 'React', icon: 'fa-brands fa-react', color: 'bg-blue-600' },
  { name: 'TypeScript', icon: 'fa-brands fa-js', color: 'bg-sky-500' },
  { name: 'Node.js', icon: 'fa-brands fa-node', color: 'bg-green-600' },
  { name: 'Python', icon: 'fa-brands fa-python', color: 'bg-yellow-700' },
  { name: 'TensorFlow', icon: 'fa-solid fa-brain', color: 'bg-indigo-700' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database', color: 'bg-blue-900' }
];

const TechStack: React.FC<{ items?: TechItem[] }> = ({ items = DEFAULT_STACK }) => {
  return (
    <div className="glass-card p-6 mb-16">
      <h3 className="text-xl font-bold text-white mb-4">Technology Stack</h3>
      <p className="text-sm text-gray-400 mb-6">Our engineers use modern, battle-tested technologies to build resilient and scalable products.</p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {items.map((t, i) => (
          <motion.div key={i} className="flex items-center justify-center p-3 rounded bg-white/5 text-white text-sm transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105 cursor-default" whileHover={{ y: -4, scale: 1.03 }}>
            <i className={`${t.icon} text-xl mr-2`}></i>
            <span className="text-xs">{t.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
