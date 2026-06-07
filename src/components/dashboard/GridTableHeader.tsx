import { ArrowUp, ArrowDown } from 'lucide-react';
import type { SortState } from '../../types';

interface GridTableHeaderProps {
  sortState: SortState;
  onSort: (column: string) => void;
}

const columns = [
  { key: 'name', label: 'Name', flex: true, sortable: true },
  { key: 'editedBy', label: 'Edited by', width: 177, sortable: false, hideBelow380: true },
 { key: 'lastEdited', label: 'Last edited', width: 140, sortable: false, hideMobile: true },
  { key: 'actions', label: 'Actions', width: 60, sortable: false, align: 'right' as const },
];

export function GridTableHeader({ sortState, onSort }: GridTableHeaderProps) {
  return (
    <div
      className="flex items-center h-[34px] border-b"
      style={{
        backgroundColor: 'var(--color-bg-white)',
        borderColor: 'var(--color-border-primary)',
      }}
      role="row"
    >
      {/* Expand + Star + Icons spacer */}
      <div className="w-[80px] sm:w-[127px] flex-shrink-0 px-2 sm:px-4" />

      {columns.map((col) => (
        <div
          key={col.key}
          className={`flex items-center gap-2 px-2 sm:px-4 h-full
            ${col.align === 'right' ? 'justify-end' : ''}
            ${col.hideBelow380 ? 'hidden min-[380px]:flex' : ''}
            ${col.hideMobile ? 'hidden sm:flex' : ''}`}
          style={{
            width: col.width ? `${col.width}px` : undefined,
            flex: col.flex ? '1' : undefined,
            minWidth: col.flex ? 0 : undefined,
          }}
          role="columnheader"
          aria-sort={
            col.sortable && sortState.column === col.key
              ? sortState.direction === 'asc' ? 'ascending' : 'descending'
              : undefined
          }
        >
          {col.sortable ? (
            <button
              onClick={() => onSort(col.key)}
              className="flex items-center gap-1.5 text-xs font-medium cursor-pointer hover:opacity-70"
              style={{ color: 'var(--color-text-heading)' }}
            >
              {col.label}
              {sortState.column === col.key ? (
                sortState.direction === 'asc' ? <ArrowUp size={12} /> : <ArrowDown size={12} />
              ) : (
                <ArrowUp size={12} className="opacity-30" />
              )}
            </button>
          ) : (
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-heading)' }}>
              {col.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}