import React from 'react';
import { ui } from '../ui';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const classBase = 'inline-flex items-center justify-center rounded px-4 py-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30';
const variants = {
  primary: ui.button.primary,
  secondary: ui.button.secondary,
  ghost: 'text-sm tracking-wider text-gray-300 hover:text-white'
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const classes = `${classBase} ${variants[variant]} ${className}`;
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
