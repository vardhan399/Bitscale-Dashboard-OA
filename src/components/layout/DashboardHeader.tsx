import { PanelLeft } from 'lucide-react';
import { Badge } from '../common/Badge';
import { Avatar } from '../common/Avatar';
import { ThemeToggle } from '../common/ThemeToggle';

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
}

export function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
  return (
    <header
      className="h-14 flex items-center justify-between px-3 sm:px-5 flex-shrink-0 border-b"
      style={{
        backgroundColor: 'var(--color-bg-white)',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      }}
      role="banner"
    >
      {/* Left: Sidebar toggle */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg transition-colors cursor-pointer lg:hidden"
        style={{ color: 'var(--color-text-secondary)' }}
        aria-label="Toggle sidebar"
      >
        <PanelLeft size={18} />
      </button>

      <div className="flex-1" />

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Usage Badge */}
        <div
          className="flex items-center h-[34px] rounded-[10.5px] px-2 gap-0.5 whitespace-nowrap"
          style={{ backgroundColor: 'var(--color-green-bg)' }}
        >
          <Badge variant="usage">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="flex-shrink-0">
              <circle cx="6" cy="6" r="5" fill="var(--color-green-primary)" opacity="0.3" />
              <circle cx="10" cy="6" r="5" fill="var(--color-green-primary)" />
            </svg>
            <span className="hidden min-[380px]:inline">450000/5000000</span>
          </Badge>
          <Badge variant="plan">Booster Plan</Badge>
        </div>

        <Avatar name="Tim" color="#F39C3E" size="md" />
        <ThemeToggle />
      </div>
    </header>
  );
}