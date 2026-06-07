import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FilterChipProps {
  label: string;
  value: string;
  onRemove: () => void;
}

export function FilterChip({ label, value, onRemove }: FilterChipProps) {
  return (
    <motion.span
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{
        backgroundColor: 'rgba(52, 127, 169, 0.1)',
        color: 'var(--color-blue-accent)',
      }}
    >
      <span className="opacity-70">{label}:</span>
      <span>{value}</span>
      <button
        onClick={onRemove}
        className="ml-0.5 p-0.5 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
        aria-label={`Remove ${label} filter`}
      >
        <X size={10} />
      </button>
    </motion.span>
  );
}
