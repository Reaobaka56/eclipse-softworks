import React from 'react';
import { motion } from 'framer-motion';

const ServiceBadge: React.FC<{ icon: string; label?: string }> = ({ icon, label }) => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-xs text-gray-200"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <i className={`${icon} text-sm`} aria-hidden></i>
      {label && <span className="hidden sm:inline">{label}</span>}
    </motion.div>
  );
};

export default ServiceBadge;
