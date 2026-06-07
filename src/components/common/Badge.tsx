import type { ReactNode } from 'react';

interface BadgeProps {
  variant: 'usage' | 'plan' | 'status';
  children: ReactNode;
  className?: string;
  dotColor?: string;
}

export function Badge({ variant, children, className = '', dotColor }: BadgeProps) {
  if (variant === 'usage') {
    return (
      <span
        className={`inline-flex items-center rounded-[16px] px-[10px] py-1 gap-1.5 font-medium text-sm ${className}`}
        style={{
          fontFamily: 'Lato, sans-serif',
          color: 'var(--color-green-primary)',
        }}
      >
        {children}
      </span>
    );
  }

  if (variant === 'plan') {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-[8.5px] px-[7px] py-[1.75px] text-xs font-medium text-white ${className}`}
        style={{ backgroundColor: 'var(--color-green-primary)' }}
      >
        {children}
      </span>
    );
  }

  // status variant
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${className}`}>
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: dotColor || 'var(--color-green-primary)' }}
      />
      {children}
    </span>
  );
}
