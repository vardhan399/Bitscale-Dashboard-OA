interface SkeletonProps {
  variant?: 'line' | 'circle' | 'card' | 'table-row';
  className?: string;
  count?: number;
}

function SkeletonItem({ variant = 'line', className = '' }: Omit<SkeletonProps, 'count'>) {
  const baseClasses = 'relative overflow-hidden';
  const variantClasses: Record<string, string> = {
    line: 'h-4 rounded w-full',
    circle: 'rounded-full w-8 h-8',
    card: 'h-[166px] rounded-lg w-full',
    'table-row': 'h-10 rounded w-full',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ backgroundColor: 'var(--color-bg-input)' }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          animation: 'shimmer 1.5s infinite',
        }}
      />
    </div>
  );
}

export function Skeleton({ variant = 'line', className = '', count = 1 }: SkeletonProps) {
  if (count === 1) return <SkeletonItem variant={variant} className={className} />;

  return (
    <div className="flex flex-col gap-2.5" role="status" aria-label="Loading">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonItem key={i} variant={variant} className={className} />
      ))}
    </div>
  );
}
