import { useGrid } from '../../context/GridContext';
import { GridTableHeader } from './GridTableHeader';
import { GridTableRow } from './GridTableRow';
import { Search } from 'lucide-react';

export function GridTable() {
  const { filteredGrids, sortState, setSort } = useGrid();

  return (
    <div
      className="rounded-lg overflow-hidden mt-4"
      role="table"
      aria-label="Data grids"
    >
      <div className="overflow-x-auto">
        <GridTableHeader sortState={sortState} onSort={setSort} />

        <div>
          {filteredGrids.length > 0 ? (
            filteredGrids.map((grid, index) => (
              <GridTableRow key={grid.id} grid={grid} index={index} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Search size={32} style={{ color: 'var(--color-text-tertiary)' }} />
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                No grids found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}