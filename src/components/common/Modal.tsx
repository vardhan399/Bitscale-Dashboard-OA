import { useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import type { ModalSize } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: string;
  children: ReactNode;
  ariaLabel?: string;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-5xl',
  full: 'max-w-[95vw]',
};

export function Modal({
  isOpen,
  onClose,
  size = 'md',
  title,
  children,
  ariaLabel,
}: ModalProps) {
  const containerRef = useFocusTrap(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`relative w-full ${sizeClasses[size]} rounded-xl shadow-2xl overflow-hidden`}
            style={{ backgroundColor: 'var(--color-bg-white)' }}
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel || title}
          >
            {title && (
              <div
                className="flex items-center justify-between px-6 py-4 border-b"
                style={{ borderColor: 'var(--color-border-primary)' }}
              >
                <h2
                  className="text-lg font-semibold"
                  style={{ color: 'var(--color-text-heading)' }}
                >
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg transition-colors hover:opacity-70 cursor-pointer"
                  style={{ color: 'var(--color-text-secondary)' }}
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>
            )}
            <div className="p-6">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
