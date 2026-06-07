import { Search, Bookmark, Eye } from 'lucide-react';
import { Button } from '../common/Button';
import { jobTitleOptions, locationOptions, headcountOptions, managementLevelOptions } from '../../data/mockData';
import type { FindPeopleFilters, FilterOption } from '../../types';

interface FilterPanelProps {
  filters: FindPeopleFilters;
  onFilterChange: (key: keyof FindPeopleFilters, value: string) => void;
  onSaveSearch: () => void;
  onPreview: () => void;
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-heading)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  options: FilterOption[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-10 rounded-lg border px-3 text-sm outline-none appearance-none cursor-pointer"
      style={{
        borderColor: 'var(--color-border-primary)',
        backgroundColor: 'var(--color-bg-white)',
        color: value ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 12px center',
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function FilterPanel({ filters, onFilterChange, onSaveSearch, onPreview }: FilterPanelProps) {
  return (
    <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-4">
      <Field label="People Keyword">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--color-text-secondary)' }} />
          <input
            type="text"
            value={filters.peopleKeyword}
            onChange={(e) => onFilterChange('peopleKeyword', e.target.value)}
            placeholder="Enter single keyword here..."
            className="w-full h-10 rounded-lg border pl-9 pr-3 text-sm outline-none"
            style={{
              borderColor: 'var(--color-border-primary)',
              backgroundColor: 'var(--color-bg-white)',
              color: 'var(--color-text-primary)',
            }}
          />
        </div>
      </Field>

      <Field label="Job Title">
        <SelectField
          value={filters.jobTitle}
          onChange={(v) => onFilterChange('jobTitle', v)}
          placeholder="E.g: Manager, Software Engineer"
          options={jobTitleOptions}
        />
      </Field>

      <Field label="Company Website">
        <input
          type="text"
          value={filters.companyWebsite}
          onChange={(e) => onFilterChange('companyWebsite', e.target.value)}
          placeholder="Eg: Google.com, Linkedin.com"
          className="w-full h-10 rounded-lg border px-3 text-sm outline-none"
          style={{
            borderColor: 'var(--color-border-primary)',
            backgroundColor: 'var(--color-bg-white)',
            color: 'var(--color-text-primary)',
          }}
        />
      </Field>

      <Field label="Person Location">
        <SelectField
          value={filters.personLocation}
          onChange={(v) => onFilterChange('personLocation', v)}
          placeholder="Eg: London, Great North City"
          options={locationOptions}
        />
      </Field>

      <Field label="Company Location">
        <SelectField
          value={filters.companyLocation}
          onChange={(v) => onFilterChange('companyLocation', v)}
          placeholder="E.g: United States, UAE"
          options={locationOptions}
        />
      </Field>

      <Field label="Company Headcount">
        <SelectField
          value={filters.companyHeadcount}
          onChange={(v) => onFilterChange('companyHeadcount', v)}
          placeholder="E.g: 11-50, 10000+"
          options={headcountOptions}
        />
      </Field>

      <Field label="Management Level">
        <SelectField
          value={filters.managementLevel}
          onChange={(v) => onFilterChange('managementLevel', v)}
          placeholder="E.g: Owner, Founder"
          options={managementLevelOptions}
        />
      </Field>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-2 pt-4 border-t" style={{ borderColor: 'var(--color-border-light)' }}>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<Bookmark size={14} />}
          onClick={onSaveSearch}
        >
          Save Search
        </Button>
        <Button
          variant="primary"
          size="sm"
          leftIcon={<Eye size={14} />}
          onClick={onPreview}
          style={{ backgroundColor: 'var(--color-green-primary)' }}
        >
          Preview Result
        </Button>
      </div>
    </div>
  );
}
