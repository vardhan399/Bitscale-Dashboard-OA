import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import type { ToastType } from '../../types';

const icons: Record<ToastType, React.ReactNode> = {
  success: <Check size={16} />,
  info: <Info size={16} />,
  warning: <AlertTriangle size={16} />,
};

const borderColors: Record<ToastType, string> = {
  success: '#438361',
  info: '#1A56DB',
  warning: '#FDB022',
};

const bgColors: Record<ToastType, string> = {
  success: '#EDF3EC',
  info: '#EBF5FF',
  warning: '#FEF3C7',
};

export function Toast() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="pointer-events-auto flex items-center gap-3 rounded-lg shadow-lg px-4 py-3 min-w-[280px] border-l-[3px]"
            style={{
              backgroundColor: bgColors[toast.type],
              borderLeftColor: borderColors[toast.type],
              color: 'var(--color-text-heading)',
            }}
            role="alert"
          >
            <span style={{ color: borderColors[toast.type] }}>{icons[toast.type]}</span>
            <span className="text-sm font-medium flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-0.5 rounded hover:opacity-70 cursor-pointer"
              aria-label="Dismiss notification"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
