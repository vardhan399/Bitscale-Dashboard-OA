import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  ariaLabel?: string;
}

export function Input({ leftIcon, ariaLabel, className = '', ...props }: InputProps) {
  return (
    <div className={`relative flex items-center ${className}`}>
      {leftIcon && (
        <span className="absolute left-3 flex items-center pointer-events-none" style={{ color: 'var(--color-text-secondary)' }}>
          {leftIcon}
        </span>
      )}
      <input
        className="w-full h-9 rounded-[8.5px] text-xs outline-none transition-shadow duration-150"
        style={{
          backgroundColor: 'var(--color-bg-input)',
          color: 'var(--color-text-primary)',
          paddingLeft: leftIcon ? '2.25rem' : '0.75rem',
          paddingRight: '0.75rem',
        }}
        aria-label={ariaLabel}
        {...props}
      />
    </div>
  );
}
