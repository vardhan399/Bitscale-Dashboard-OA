// ============================================
// Bitscale Dashboard — TypeScript Interfaces
// ============================================

// Grid / Table Types
export interface GridIcon {
  type: 'users' | 'company' | 'linkedin' | 'salesforce' | 'hubspot' | 'google' | 'search' | 'csv';
  color: string;
}

export interface GridItem {
  id: string;
  name: string;
  type: 'workbook' | 'grid';
  icons: GridIcon[];
  editedBy: {
    name: string;
    avatarColor: string;
  };
  lastEdited: string;
  isStarred: boolean;
  isExpanded: boolean;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  isActive?: boolean;
  hasArrow?: boolean;
}

export interface NavGroup {
  id: string;
  label?: string;
  items: NavItem[];
}

// Find People Filter Types
export interface FilterOption {
  value: string;
  label: string;
}

export interface FindPeopleFilters {
  peopleKeyword: string;
  jobTitle: string;
  companyWebsite: string;
  personLocation: string;
  companyLocation: string;
  companyHeadcount: string;
  managementLevel: string;
}

export interface ActiveFilter {
  key: keyof FindPeopleFilters;
  label: string;
  value: string;
}

// Toast Types
export type ToastType = 'success' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

// Command Palette Types
export interface CommandItem {
  id: string;
  label: string;
  category: 'Grids' | 'Navigation' | 'Actions';
  icon: string;
  action: () => void;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Tab Types
export type TabType = 'my-grids' | 'starred';

// Sort Types
export type SortDirection = 'asc' | 'desc';

export interface SortState {
  column: string;
  direction: SortDirection;
}

// Onboarding Types
export interface OnboardingItem {
  id: string;
  label: string;
  isCompleted: boolean;
}

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon';
export type ButtonSize = 'sm' | 'md';

// Modal Sizes
export type ModalSize = 'sm' | 'md' | 'lg' | 'full';
