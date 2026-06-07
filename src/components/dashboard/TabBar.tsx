import { Search, List } from 'lucide-react';
import { Input } from '../common/Input';
import { useGrid } from '../../context/GridContext';
import type { TabType } from '../../types';

const tabs: { key: TabType; label: string }[] = [
  { key: 'my-grids', label: 'My Grids' },
  { key: 'starred', label: 'Starred' },
];

export function TabBar() {
  const { activeTab, setActiveTab, searchQuery, setSearchQuery } = useGrid();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
      {/* Tabs */}
      <div className="flex items-center relative">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative px-1 pb-2.5 mr-8 text-sm font-medium transition-colors cursor-pointer"
            style={{
              color: activeTab === tab.key ? 'var(--color-blue-primary)' : 'var(--color-text-secondary)',
            }}
            aria-selected={activeTab === tab.key}
            role="tab"
          >
            {tab.label}
            {activeTab === tab.key && (
              <span
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{ backgroundColor: 'var(--color-blue-primary)' }}
              />
            )}
          </button>
        ))}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] -z-10"
          style={{ backgroundColor: 'var(--color-border-primary)' }}
        />
      </div>

      {/* Search + View Toggle */}
      <div className="flex items-center gap-3">
        <Input
          leftIcon={<Search size={14} />}
          placeholder="Search grids and workbooks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-72"
          ariaLabel="Search grids and workbooks"
        />
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
          style={{ backgroundColor: 'var(--color-bg-input)', color: 'var(--color-text-muted)' }}
          aria-label="Toggle view"
        >
          <List size={14} />
        </button>
      </div>
    </div>
  );
}
