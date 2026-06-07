import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  color?: string;
  animated?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  color = 'var(--color-green-primary)',
  animated = false,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={`w-full h-1 rounded-full overflow-hidden ${className}`}
      style={{ backgroundColor: 'var(--color-border-primary)' }}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {animated ? (
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: '0%' }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        />
      ) : (
        <div
          className="h-full rounded-full"
          style={{ backgroundColor: color, width: `${clamped}%` }}
        />
      )}
    </div>
  );
}
