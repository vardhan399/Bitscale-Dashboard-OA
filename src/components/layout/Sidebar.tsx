import { motion } from 'framer-motion';
import {
  Home, LayoutDashboard, BookOpen, Puzzle,
  FileText, Settings, ChevronRight, ChevronLeft, HelpCircle,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  home: Home,
  'layout-dashboard': LayoutDashboard,
  'book-open': BookOpen,
  puzzle: Puzzle,
  'file-text': FileText,
  settings: Settings,
};

const navGroups = [
  {
    id: 'main',
    label: 'GTM Spaces',
    items: [
      { id: 'nav-home', label: 'Home', icon: 'home', isActive: false, hasArrow: false },
      { id: 'nav-dashboard', label: 'My Dashboard', icon: 'layout-dashboard', isActive: true, hasArrow: true },
      { id: 'nav-playbooks', label: 'Playbooks', icon: 'book-open', isActive: false, hasArrow: false },
      { id: 'nav-integrations', label: 'Integrations', icon: 'puzzle', isActive: false, hasArrow: false },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    items: [
      { id: 'nav-docs', label: 'Documentation', icon: 'file-text', isActive: false, hasArrow: false },
      { id: 'nav-settings', label: 'Settings', icon: 'settings', isActive: false, hasArrow: false },
    ],
  },
];

const BitscaleLogo = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ color: 'var(--color-sidebar-text-active)' }}>
    <path d="M12 4 L8 36" stroke="currentColor" strokeWidth="4.5" strokeDasharray="8 5" strokeLinecap="square" />
    <path d="M13 6 L24 6 C31 6 34 9 34 14 C34 18 31 20 24 20 L16 20" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
    <polygon points="16,15 8,20 16,25" fill="currentColor" />
    <path d="M12 20 L26 20 C34 20 37 24 37 28 C37 33 34 36 26 36 L16 36" stroke="currentColor" strokeWidth="4.5" strokeLinecap="square" />
    <polygon points="16,31 8,36 16,41" fill="currentColor" />
  </svg>
);

export function Sidebar({ isCollapsed, onToggleCollapse }: SidebarProps) {
  return (
    <motion.aside
      animate={{ width: isCollapsed ? 64 : 240 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="relative h-screen flex-shrink-0 flex flex-col overflow-hidden z-30 border-r"
      style={{ backgroundColor: 'var(--color-sidebar-bg)', borderColor: 'var(--color-border-primary)' }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex items-center gap-1 px-4 h-14 flex-shrink-0 mt-2">
        <BitscaleLogo />
        <motion.span
          animate={{ opacity: isCollapsed ? 0 : 1, width: isCollapsed ? 0 : 'auto' }}
          transition={{ duration: 0.2 }}
          className="font-bold text-xl whitespace-nowrap overflow-hidden"
          style={{ color: 'var(--color-sidebar-text-active)', letterSpacing: '-0.3px', fontFamily: 'var(--font-sans)' }}
        >
          itscale
        </motion.span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-2 overflow-y-auto overflow-x-hidden">
        {navGroups.map((group, gi) => (
          <div key={group.id}>
            {gi > 0 && (
              <div className="h-px mx-4 my-3" style={{ backgroundColor: 'var(--color-sidebar-divider)' }} />
            )}
            <motion.div
              animate={{ opacity: isCollapsed ? 0 : 1, height: isCollapsed ? 0 : 'auto' }}
              className="px-4 mb-1 overflow-hidden"
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: 'var(--color-sidebar-text)' }}
              >
                {group.label}
              </span>
            </motion.div>

            <div className="flex flex-col gap-0.5 px-2">
              {group.items.map((item) => {
                const Icon = iconMap[item.icon] || Home;
                return (
                  <button
                    key={item.id}
                    className={`flex items-center gap-3 rounded-lg text-sm transition-all duration-150 cursor-pointer w-full ${
                      isCollapsed ? 'px-3 py-2.5 justify-center' : 'px-3 py-2'
                    }`}
                    style={{
                      backgroundColor: item.isActive
                        ? 'var(--color-sidebar-active-bg)'
                        : 'transparent',
                      color: item.isActive
                        ? 'var(--color-sidebar-text-active)'
                        : 'var(--color-sidebar-text)',
                      borderLeft: item.isActive ? '2px solid var(--color-sidebar-active-border)' : '2px solid transparent',
                    }}
                    title={isCollapsed ? item.label : undefined}
                    aria-current={item.isActive ? 'page' : undefined}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left whitespace-nowrap">{item.label}</span>
                        {item.hasArrow && <ChevronRight size={14} className="opacity-50" />}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="px-3 py-3 border-t flex-shrink-0"
        style={{ borderColor: 'var(--color-sidebar-divider)' }}
      >
        <div className="flex items-center gap-2.5 px-1">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-green-primary)' }}
          >
            <HelpCircle size={14} className="text-white" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <p className="text-xs font-semibold" style={{ color: 'var(--color-sidebar-text-active)' }}>Bitscale</p>
              <p className="text-[10px]" style={{ color: 'var(--color-sidebar-text)' }}>
                Get Support at Bitscale
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 rounded-full border flex items-center justify-center z-40 cursor-pointer transition-colors shadow-sm"
        style={{
          backgroundColor: 'var(--color-bg-white)',
          borderColor: 'var(--color-border-primary)',
          color: 'var(--color-text-secondary)',
        }}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </motion.aside>
  );
}
