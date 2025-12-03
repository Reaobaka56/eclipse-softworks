import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ServiceStat: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="w-full max-w-[180px]">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{label}</span>
        <span className="text-white font-bold">{value}%</span>
      </div>
      <div className="w-full bg-white/15 h-2 rounded">
        <motion.div
          className="h-2 rounded bg-green-500"
          initial={{ width: 0 }}
          animate={shouldReduceMotion ? { width: `${value}%` } : { width: `${value}%` }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default ServiceStat;
