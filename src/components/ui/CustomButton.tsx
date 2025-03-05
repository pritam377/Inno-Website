
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-innovica-accent text-white hover:bg-opacity-90',
    secondary: 'bg-innovica-light text-innovica-primary border border-innovica-secondary border-opacity-20 hover:bg-opacity-80',
    outline: 'bg-transparent text-innovica-primary border border-innovica-primary hover:bg-innovica-primary hover:bg-opacity-5',
    ghost: 'bg-transparent text-innovica-primary hover:bg-innovica-light',
  };

  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  return (
    <button
      className={cn(
        'rounded-lg font-medium flex items-center justify-center transition-all duration-300 ease-in-out relative',
        'focus:outline-none focus:ring-2 focus:ring-innovica-accent focus:ring-opacity-50',
        'disabled:opacity-60 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className={cn('flex items-center gap-2', isLoading ? 'opacity-0' : 'opacity-100')}>
        {leftIcon && <span>{leftIcon}</span>}
        {children}
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default CustomButton;
