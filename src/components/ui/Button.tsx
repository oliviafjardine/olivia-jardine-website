import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'black';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative rounded-full transition-all duration-200 font-normal inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-accent-primary hover:bg-accent-hover text-white border border-accent-primary hover:border-accent-hover',
    secondary: 'bg-secondary hover:bg-accent text-primary border border-primary hover:border-accent',
    black: 'bg-black hover:bg-[#333] text-white border border-black hover:border-[#333]'
  };
  
  const sizeStyles = {
    sm: 'px-6 py-2 text-xs sm:text-sm',
    md: 'px-8 py-3 text-sm sm:text-base',
    lg: 'px-10 py-4 text-base sm:text-lg'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();
  
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
