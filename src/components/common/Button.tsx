import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { ButtonVariant, ButtonSize } from '../../types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  ariaLabel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'text-white font-medium rounded-[8.5px] cursor-pointer',
  secondary:
    'border font-medium rounded-[6.78px] cursor-pointer',
  ghost:
    'bg-transparent font-medium rounded-lg cursor-pointer hover:opacity-80',
  icon:
    'p-1.5 rounded-[8.5px] cursor-pointer',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-[34px] px-3 text-xs gap-2',
  md: 'h-[35px] px-3 text-sm gap-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  className = '',
  ariaLabel,
  style,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center transition-colors duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={ariaLabel}
      style={{
        backgroundColor:
          variant === 'primary' ? 'var(--color-bg-dark-button)' : undefined,
        borderColor:
          variant === 'secondary' ? 'var(--color-border-primary)' : undefined,
        color:
          variant === 'secondary' || variant === 'ghost'
            ? 'var(--color-text-heading)'
            : undefined,
        ...style,
      }}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </motion.button>
  );
}
