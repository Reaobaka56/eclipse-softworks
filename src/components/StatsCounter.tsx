import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface StatsCounterProps {
  end: number | string;
  label: string;
  suffix?: string;
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ end, label, suffix = '', className = '' }) => {
  const controls = useAnimation();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let target = typeof end === 'number' ? end : parseInt((end as string).replace(/[^0-9]/g, '')) || 0;
    controls.start({ x: 0 });

    // start framer controls if needed - not used currently but left for animation hooks
    controls.start({ x: 0 });

    // Simple count up using requestAnimationFrame
    let start = 0;
    const duration = 1200;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.round(progress * target);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [end, controls, value]);

  return (
    <div className={`text-center ${className}`} aria-hidden={false}>
      <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
        <motion.span aria-live="polite">
          {typeof end === 'string' ? (
            <span>{end}</span>
          ) : (
            <motion.span>{value}</motion.span>
          )}
          {suffix}
        </motion.span>
      </div>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
};

export default StatsCounter;
