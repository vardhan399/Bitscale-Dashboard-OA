import { createContext, useContext, useCallback, useMemo, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { defaultGrids } from '../data/mockData';
import type { GridItem, TabType, SortState } from '../types';

interface GridContextValue {
  grids: GridItem[];
  filteredGrids: GridItem[];
  activeTab: TabType;
  searchQuery: string;
  sortState: SortState;
  addGrid: (name: string) => void;
  toggleStar: (id: string) => void;
  deleteGrid: (id: string) => void;
  setActiveTab: (tab: TabType) => void;
  setSearchQuery: (query: string) => void;
  setSort: (column: string) => void;
}

const GridContext = createContext<GridContextValue | undefined>(undefined);

export function GridProvider({ children }: { children: ReactNode }) {
  const [grids, setGrids] = useLocalStorage<GridItem[]>('bitscale-grids', defaultGrids);
  const [activeTab, setActiveTab] = useLocalStorage<TabType>('bitscale-tab', 'my-grids');
  const [searchQuery, setSearchQuery] = useLocalStorage<string>('bitscale-search', '');
  const [sortState, setSortState] = useLocalStorage<SortState>('bitscale-sort', {
    column: 'name',
    direction: 'asc',
  });

  const addGrid = useCallback(
    (name: string) => {
      const newGrid: GridItem = {
        id: `grid-${Date.now()}`,
        name,
        type: 'grid',
        icons: [{ type: 'search', color: '#6B7280' }],
        editedBy: { name: 'You', avatarColor: '#438361' },
        lastEdited: new Date().toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
        isStarred: false,
        isExpanded: false,
      };
      setGrids((prev) => [newGrid, ...prev]);
    },
    [setGrids]
  );

  const toggleStar = useCallback(
    (id: string) => {
      setGrids((prev) =>
        prev.map((g) => (g.id === id ? { ...g, isStarred: !g.isStarred } : g))
      );
    },
    [setGrids]
  );

  const deleteGrid = useCallback(
    (id: string) => {
      setGrids((prev) => prev.filter((g) => g.id !== id));
    },
    [setGrids]
  );

  const setSort = useCallback(
    (column: string) => {
      setSortState((prev) => ({
        column,
        direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
      }));
    },
    [setSortState]
  );

  const filteredGrids = useMemo(() => {
    let result = [...grids];

    if (activeTab === 'starred') {
      result = result.filter((g) => g.isStarred);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((g) => g.name.toLowerCase().includes(q));
    }

    result.sort((a, b) => {
      const dir = sortState.direction === 'asc' ? 1 : -1;
      switch (sortState.column) {
        case 'name':
          return a.name.localeCompare(b.name) * dir;
        case 'editedBy':
          return a.editedBy.name.localeCompare(b.editedBy.name) * dir;
        case 'lastEdited':
          return a.lastEdited.localeCompare(b.lastEdited) * dir;
        default:
          return 0;
      }
    });

    return result;
  }, [grids, activeTab, searchQuery, sortState]);

  const value = useMemo(
    () => ({
      grids,
      filteredGrids,
      activeTab,
      searchQuery,
      sortState,
      addGrid,
      toggleStar,
      deleteGrid,
      setActiveTab,
      setSearchQuery,
      setSort,
    }),
    [grids, filteredGrids, activeTab, searchQuery, sortState, addGrid, toggleStar, deleteGrid, setActiveTab, setSearchQuery, setSort]
  );

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}

export function useGrid(): GridContextValue {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error('useGrid must be used within a GridProvider');
  }
  return context;
}
