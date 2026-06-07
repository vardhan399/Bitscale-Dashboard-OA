import { AnimatePresence } from 'framer-motion';
import { FilterChip } from '../common/FilterChip';
import { EmptyState } from './EmptyState';
import type { ActiveFilter } from '../../types';

interface ResultsTableProps {
  activeFilters: ActiveFilter[];
  onRemoveFilter: (key: string) => void;
}

const columns = ['NAME', 'TITLE', 'HEADLINE', 'LINKEDIN URL', 'COMPANY', 'COMPANY URL'];

export function ResultsTable({ activeFilters, onRemoveFilter }: ResultsTableProps) {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Active filter chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          <AnimatePresence>
            {activeFilters.map((f) => (
              <FilterChip
                key={f.key}
                label={f.label}
                value={f.value}
                onRemove={() => onRemoveFilter(f.key)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Table header */}
      <div className="overflow-x-auto">
        <div
          className="flex items-center h-10 min-w-[700px] border-b"
          style={{
            backgroundColor: 'var(--color-bg-alt-row)',
            borderColor: 'var(--color-border-primary)',
          }}
        >
          {columns.map((col) => (
            <div
              key={col}
              className="px-3 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                color: 'var(--color-text-secondary)',
                width: col === 'NAME' ? undefined : '120px',
                flex: col === 'NAME' ? 1 : undefined,
                minWidth: col === 'NAME' ? '120px' : undefined,
              }}
            >
              {col}
            </div>
          ))}
        </div>
      </div>

      {/* Empty state */}
      <EmptyState />
    </div>
  );
}
