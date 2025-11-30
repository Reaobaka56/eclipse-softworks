import React from 'react';

const Toast: React.FC<{ type?: 'success' | 'error' | 'info'; children: React.ReactNode }> = ({ type = 'info', children }) => {
  const base = 'px-4 py-2 rounded-md text-sm font-medium';
  const classes = {
    success: 'bg-white/10 text-white',
    error: 'bg-white/10 text-white',
    info: 'bg-gray-800 text-white'
  }[type];
  return (
    <div role="status" aria-live="polite" className={`${base} ${classes} shadow-md`}>{children}</div>
  );
};

export default Toast;
