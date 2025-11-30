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
      onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick(); }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={`
        bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-lg p-6
        ${hoverEffect ? 'hover:border-white/30 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all duration-500' : ''}
        ${onClick ? 'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;