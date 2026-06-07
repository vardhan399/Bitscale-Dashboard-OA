import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Home, LayoutDashboard, BookOpen, Puzzle,
  FileText, Settings, Building2, Users, Plus, Moon,
} from 'lucide-react';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { useGrid } from '../../context/GridContext';
import { useTheme } from '../../context/ThemeContext';
import { useKeyboardShortcut } from '../../hooks/useKeyboardShortcut';
import { navigationCommands, actionCommands } from '../../data/mockData';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  home: Home,
  'layout-dashboard': LayoutDashboard,
  'book-open': BookOpen,
  puzzle: Puzzle,
  'file-text': FileText,
  settings: Settings,
  'building-2': Building2,
  users: Users,
  plus: Plus,
  moon: Moon,
  search: Search,
};

export function CommandPalette() {
  const { isOpen, close, toggle } = useCommandPalette();
  const { grids } = useGrid();
  const { toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useKeyboardShortcut(['mod', 'k'], toggle);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const allItems = useMemo(() => {
    const gridItems = grids.slice(0, 5).map((g) => ({
      id: g.id,
      label: g.name,
      category: 'Grids' as const,
      icon: 'search',
      action: () => close(),
    }));

    const navItems = navigationCommands.map((c) => ({
      ...c,
      action: () => close(),
    }));

    const actItems = actionCommands.map((c) => ({
      ...c,
      action: () => {
        if (c.id === 'cmd-toggle-theme') toggleTheme();
        close();
      },
    }));

    return [...actItems, ...navItems, ...gridItems];
  }, [grids, close, toggleTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter((item) => item.label.toLowerCase().includes(q));
  }, [allItems, query]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach((item) => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [filtered]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault();
      filtered[activeIndex].action();
    } else if (e.key === 'Escape') {
      close();
    }
  };

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center pt-[20vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border"
            style={{
              backgroundColor: 'var(--color-bg-white)',
              borderColor: 'var(--color-border-primary)',
            }}
            onKeyDown={handleKeyDown}
          >
            <div
              className="flex items-center gap-3 px-4 py-3 border-b"
              style={{ borderColor: 'var(--color-border-primary)' }}
            >
              <Search size={16} style={{ color: 'var(--color-text-secondary)' }} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: 'var(--color-text-primary)' }}
                aria-label="Command palette search"
              />
              <kbd
                className="text-[10px] px-1.5 py-0.5 rounded border font-mono"
                style={{
                  borderColor: 'var(--color-border-primary)',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                ESC
              </kbd>
            </div>

            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p
                  className="text-sm text-center py-8"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  No results found.
                </p>
              )}

              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div
                    className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {category}
                  </div>
                  {items.map((item) => {
                    flatIndex++;
                    const idx = flatIndex;
                    const Icon = iconMap[item.icon] || Search;
                    return (
                      <button
                        key={item.id}
                        onClick={() => item.action()}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors cursor-pointer"
                        style={{
                          backgroundColor:
                            activeIndex === idx ? 'var(--color-bg-input)' : 'transparent',
                          color: 'var(--color-text-primary)',
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                      >
                        <Icon size={16} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <div
              className="flex items-center justify-between px-4 py-2 border-t text-[10px]"
              style={{
                borderColor: 'var(--color-border-primary)',
                color: 'var(--color-text-tertiary)',
              }}
            >
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
