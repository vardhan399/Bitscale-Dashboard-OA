import { motion } from 'framer-motion';
import { Search, Users } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-12 px-8 text-center">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mb-6"
      >
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-bg-input)' }}
        >
          <Search size={32} style={{ color: 'var(--color-text-tertiary)' }} />
        </div>
        <div
          className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-blue-accent)', opacity: 0.15 }}
        >
          <Users size={20} style={{ color: 'var(--color-blue-accent)' }} />
        </div>
      </motion.div>

      <p className="text-sm max-w-xs" style={{ color: 'var(--color-text-secondary)' }}>
        Start your Company search, preview, and import companies for enrichment by applying any filter in the left panel.
      </p>

      <div className="flex items-center gap-3 my-3 w-full max-w-[200px]">
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border-primary)' }} />
        <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>Or</span>
        <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border-primary)' }} />
      </div>

      <button
        className="text-sm cursor-pointer hover:underline"
        style={{ color: 'var(--color-blue-accent)' }}
      >
        Import companies from saved Search.
      </button>
    </div>
  );
}
