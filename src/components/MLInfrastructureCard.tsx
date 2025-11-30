import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ServiceStat from './ServiceStat';
// Framer Motion animations are embedded directly in elements for simplicity and performance

const AnimatedNode: React.FC<{ label: string; active?: boolean; delay?: number }> = ({ label, active = true, delay = 0 }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [1, 1.05, 1] }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.6, delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      className="ml-node flex-1"
    >
      <div className="label mb-1">{label}</div>
      <div className="sub">{active ? 'Active' : 'Idle'}</div>
    </motion.div>
  );
};

const MLInfrastructureCard: React.FC<{ onRequest?: () => void }> = ({ onRequest }) => {
  return (
    <motion.div
      className="glass-card p-8 group service-feature transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <motion.i className="fa-solid fa-server text-2xl mb-0 text-gray-300 group-hover:text-white transition-colors"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
            aria-hidden
          />
          <div>
            <h3 className="text-lg font-bold mb-1 text-white">ML Infrastructure</h3>
            <p className="text-xs text-gray-400">End-to-end ML infrastructure; pipelines, training, model ops, and scalable deployment.</p>
          </div>
        </div>

        <div className="mt-4 flex gap-3 items-center justify-between flex-wrap">
          <div className="flex gap-3 w-full md:w-auto items-center">
            <AnimatedNode label="Data»" delay={0.1} />
            <div className="w-8 h-1 bg-white/10 rounded hidden md:block" />
            <AnimatedNode label="Train" delay={0.3} />
            <div className="w-8 h-1 bg-white/10 rounded hidden md:block" />
            <AnimatedNode label="Deploy" delay={0.6} />
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center gap-3 flex-wrap">
          <div className="flex gap-4 items-center">
            <span className="text-xs text-gray-400">Supports:</span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-200">Kubernetes</span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-200">TF/ONNX</span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-200">S3</span>
          </div>
            <div className="flex items-center gap-3">
            <ServiceStat label="Uptime" value={99} />
            <motion.button
              type="button"
              aria-label="Request architecture consultation"
              onClick={() => onRequest && onRequest()}
              className="btn-primary px-3 py-1 text-xs"
              whileHover={{ scale: 1.04 }}
            >
              Request Architecture
            </motion.button>
          </div>
          </div>
      </div>
    </motion.div>
  );
};

export default MLInfrastructureCard;
