import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NeuralCard: React.FC<{className?: string}> = ({ className = '' }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        if (!containerRef.current) return;
        const r = containerRef.current.getBoundingClientRect();
        setRect(r);
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        setCursor({ x, y });
      }}
      onMouseLeave={() => setCursor(null)}
      className={`glass-card rounded-sm overflow-hidden border-glow floating-object relative transform transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10 ${className}`}
    >
      {cursor && (
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 10%, transparent 40%)`,
          filter: 'blur(8px)',
          transition: 'background 120ms ease-out',
          zIndex: 0,
        }} />
      )}
        <div className="px-4 py-2 border-b border-white/10 bg-black/40 flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">neural_network.vis</span>
            <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full border border-white/20"></div>
                <div className="w-2 h-2 rounded-full border border-white/20"></div>
            </div>
        </div>
        <div className="p-6 bg-black/80 font-mono text-sm overflow-x-auto">
            <div 
              className="grid grid-cols-3 gap-4"
              style={{
                transform: cursor && rect ? `translate(${(cursor.x - rect.width / 2) * 0.03}px, ${(cursor.y - rect.height / 2) * 0.03}px)` : 'none',
                transition: 'transform 0.1s ease-out'
              }}
            >
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setHovered(0)}
                  onMouseLeave={() => setHovered(null)}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2 transition-shadow duration-300 ${hovered === 0 ? 'shadow-[0_0_40px_rgba(255,255,255,0.06)] scale-105' : ''}`}>
                        <motion.i 
                          className="fa-solid fa-brain text-white/70" 
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        ></motion.i>
                    </div>
                    <span className="text-xs text-gray-400">Neural Networks</span>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setHovered(1)}
                  onMouseLeave={() => setHovered(null)}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2 transition-shadow duration-300 ${hovered === 1 ? 'shadow-[0_0_40px_rgba(255,255,255,0.06)] scale-105' : ''}`}>
                        <motion.i 
                          className="fa-solid fa-chart-line text-white/70"
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        ></motion.i>
                    </div>
                    <span className="text-xs text-gray-400">Predictive Analytics</span>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setHovered(2)}
                  onMouseLeave={() => setHovered(null)}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2 transition-shadow duration-300 ${hovered === 2 ? 'shadow-[0_0_40px_rgba(255,255,255,0.06)] scale-105' : ''}`}>
                        <motion.i 
                          className="fa-solid fa-robot text-white/70"
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        ></motion.i>
                    </div>
                    <span className="text-xs text-gray-400">Automation</span>
                </motion.div>
            </div>
        </div>
        {/* Background decoration */}
        <div className="absolute -inset-4 border border-white/5 z-[-1] rounded-sm"></div>
    </div>
  );
};

export default NeuralCard;
