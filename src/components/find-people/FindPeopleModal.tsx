import { useState, useMemo } from 'react';
import { X, ChevronDown, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterPanel } from './FilterPanel';
import { ResultsTable } from './ResultsTable';
import { useToast } from '../../context/ToastContext';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import type { FindPeopleFilters, ActiveFilter } from '../../types';

interface FindPeopleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaultFilters: FindPeopleFilters = {
  peopleKeyword: '',
  jobTitle: '',
  companyWebsite: '',
  personLocation: '',
  companyLocation: '',
  companyHeadcount: '',
  managementLevel: '',
};

const filterLabels: Record<keyof FindPeopleFilters, string> = {
  peopleKeyword: 'Keyword',
  jobTitle: 'Job Title',
  companyWebsite: 'Website',
  personLocation: 'Person Location',
  companyLocation: 'Company Location',
  companyHeadcount: 'Headcount',
  managementLevel: 'Management',
};

export function FindPeopleModal({ isOpen, onClose }: FindPeopleModalProps) {
  const [filters, setFilters] = useState<FindPeopleFilters>(defaultFilters);
  const { addToast } = useToast();
  const containerRef = useFocusTrap(isOpen);

  const handleFilterChange = (key: keyof FindPeopleFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const activeFilters: ActiveFilter[] = useMemo(() => {
    return (Object.keys(filters) as Array<keyof FindPeopleFilters>)
      .filter((key) => filters[key].trim() !== '')
      .map((key) => ({
        key,
        label: filterLabels[key],
        value: filters[key],
      }));
  }, [filters]);

  const handleRemoveFilter = (key: string) => {
    setFilters((prev) => ({ ...prev, [key]: '' }));
  };

  const handleSaveSearch = () => {
    addToast('Search saved successfully!', 'success');
  };

  const handlePreview = () => {
    addToast('Preview results loaded', 'info');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-5xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden flex flex-col"
            style={{ backgroundColor: 'var(--color-bg-white)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Find People"
          >
            {/* Header */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b flex-shrink-0"
              style={{ borderColor: 'var(--color-border-primary)' }}
            >
              <div className="flex items-center gap-3">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: 'var(--color-text-heading)' }}
                >
                  Find People
                </h2>
                <button
                  className="flex items-center gap-1 text-sm cursor-pointer hover:underline"
                  style={{ color: 'var(--color-blue-accent)' }}
                >
                  Saved Search
                  <ChevronDown size={14} />
                </button>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                  Found 0 companies. Click preview to view results
                </span>

                <span className="text-xs font-medium text-red-500">
                  8000/50000
                </span>

                <div
                  className="flex items-center gap-1 px-2 py-1 rounded-md border text-[10px]"
                  style={{
                    backgroundColor: '#FFFBEB',
                    borderColor: '#FDE68A',
                    color: '#92400E',
                  }}
                >
                  <Lock size={10} />
                  Unlock 100,000 leads with Enterprise Plan!
                </div>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg transition-colors cursor-pointer hover:opacity-70"
                  style={{ color: 'var(--color-text-secondary)' }}
                  aria-label="Close Find People"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-6 p-6 flex-1 overflow-y-auto min-h-[400px]">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onSaveSearch={handleSaveSearch}
                onPreview={handlePreview}
              />
              <ResultsTable
                activeFilters={activeFilters}
                onRemoveFilter={handleRemoveFilter}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
