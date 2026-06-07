import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
      style={{
        backgroundColor: 'var(--color-bg-input)',
        color: 'var(--color-text-secondary)',
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </motion.button>
  );
}
