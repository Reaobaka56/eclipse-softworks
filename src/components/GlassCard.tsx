import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-lg p-6
        ${hoverEffect ? 'hover:border-white/30 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all duration-500' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;