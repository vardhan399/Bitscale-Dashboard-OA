import type { GridItem, OnboardingItem, FilterOption } from '../types';

// ============================================
// Grid / Table Data (matches Figma exactly)
// ============================================
export const defaultGrids: GridItem[] = [
  {
    id: 'grid-1',
    name: 'Workbook - Testing design Ideas for grid and workbook',
    type: 'workbook',
    icons: [
      { type: 'users', color: '#8F65AF' },
      { type: 'linkedin', color: '#0A66C2' },
      { type: 'company', color: '#438361' },
    ],
    editedBy: { name: 'Sam Taylor', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-2',
    name: 'LinkedIn',
    type: 'grid',
    icons: [{ type: 'linkedin', color: '#0A66C2' }],
    editedBy: { name: 'Chris Parker', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-3',
    name: 'Sales nav',
    type: 'grid',
    icons: [{ type: 'salesforce', color: '#0A66C2' }],
    editedBy: { name: 'Jone Doe', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-4',
    name: 'find company',
    type: 'grid',
    icons: [{ type: 'company', color: '#438361' }],
    editedBy: { name: 'Alex Morgan', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: true,
    isExpanded: false,
  },
  {
    id: 'grid-5',
    name: 'import csv',
    type: 'grid',
    icons: [{ type: 'csv', color: '#6B7280' }],
    editedBy: { name: 'Drew Wilson', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-6',
    name: 'Find people',
    type: 'grid',
    icons: [{ type: 'users', color: '#8F65AF' }],
    editedBy: { name: 'Jone Doe', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: true,
    isExpanded: false,
  },
  {
    id: 'grid-7',
    name: 'Google maps',
    type: 'grid',
    icons: [{ type: 'google', color: '#4285F4' }],
    editedBy: { name: 'Jone Doe', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-8',
    name: 'google search results',
    type: 'grid',
    icons: [{ type: 'search', color: '#6B7280' }],
    editedBy: { name: 'Jone Doe', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-9',
    name: 'factors',
    type: 'grid',
    icons: [{ type: 'company', color: '#438361' }],
    editedBy: { name: 'Jone Doe', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
  {
    id: 'grid-10',
    name: 'HubSpot List - 10 (05 Aug 25)',
    type: 'grid',
    icons: [{ type: 'hubspot', color: '#FF7A59' }],
    editedBy: { name: 'Jone Doe', avatarColor: '#F39C3E' },
    lastEdited: '06 Aug, 2025',
    isStarred: false,
    isExpanded: false,
  },
];

// ============================================
// Onboarding Checklist Data
// ============================================
export const onboardingItems: OnboardingItem[] = [
  { id: 'onb-1', label: 'Create your data list', isCompleted: true },
  { id: 'onb-2', label: 'Learn about BitAgent', isCompleted: true },
  { id: 'onb-3', label: 'Connect an integration', isCompleted: true },
  { id: 'onb-4', label: 'Customise waterfall providers', isCompleted: false },
];

// ============================================
// Filter Options for Find People
// ============================================
export const jobTitleOptions: FilterOption[] = [
  { value: 'manager', label: 'Manager' },
  { value: 'software-engineer', label: 'Software Engineer' },
  { value: 'director', label: 'Director' },
  { value: 'vp', label: 'VP' },
  { value: 'cto', label: 'CTO' },
  { value: 'ceo', label: 'CEO' },
  { value: 'designer', label: 'Designer' },
  { value: 'product-manager', label: 'Product Manager' },
];

export const locationOptions: FilterOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'london', label: 'London' },
  { value: 'uae', label: 'UAE' },
  { value: 'india', label: 'India' },
  { value: 'germany', label: 'Germany' },
  { value: 'canada', label: 'Canada' },
  { value: 'australia', label: 'Australia' },
];

export const headcountOptions: FilterOption[] = [
  { value: '1-10', label: '1-10' },
  { value: '11-50', label: '11-50' },
  { value: '51-200', label: '51-200' },
  { value: '201-500', label: '201-500' },
  { value: '501-1000', label: '501-1000' },
  { value: '1001-5000', label: '1001-5000' },
  { value: '5001-10000', label: '5001-10000' },
  { value: '10000+', label: '10000+' },
];

export const managementLevelOptions: FilterOption[] = [
  { value: 'owner', label: 'Owner' },
  { value: 'founder', label: 'Founder' },
  { value: 'c-suite', label: 'C-Suite' },
  { value: 'partner', label: 'Partner' },
  { value: 'vp', label: 'VP' },
  { value: 'director', label: 'Director' },
  { value: 'manager', label: 'Manager' },
  { value: 'senior', label: 'Senior' },
  { value: 'entry', label: 'Entry' },
];

// ============================================
// Navigation Items
// ============================================
export const sidebarNavGroups = [
  {
    id: 'gtm',
    label: 'GTM Spaces',
    items: [
      { id: 'nav-home', label: 'Home', icon: 'home' },
      { id: 'nav-dashboard', label: 'My Dashboard', icon: 'layout-dashboard', isActive: true, hasArrow: true },
      { id: 'nav-playbooks', label: 'Playbooks', icon: 'book-open' },
      { id: 'nav-integrations', label: 'Integrations', icon: 'puzzle' },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    items: [
      { id: 'nav-docs', label: 'Documentation', icon: 'file-text' },
      { id: 'nav-settings', label: 'Settings', icon: 'settings' },
    ],
  },
];

// ============================================
// Command Palette Items
// ============================================
export const navigationCommands = [
  { id: 'cmd-home', label: 'Go to Home', category: 'Navigation' as const, icon: 'home' },
  { id: 'cmd-dashboard', label: 'Go to Dashboard', category: 'Navigation' as const, icon: 'layout-dashboard' },
  { id: 'cmd-playbooks', label: 'Go to Playbooks', category: 'Navigation' as const, icon: 'book-open' },
  { id: 'cmd-integrations', label: 'Go to Integrations', category: 'Navigation' as const, icon: 'puzzle' },
  { id: 'cmd-docs', label: 'Go to Documentation', category: 'Navigation' as const, icon: 'file-text' },
  { id: 'cmd-settings', label: 'Go to Settings', category: 'Navigation' as const, icon: 'settings' },
];

export const actionCommands = [
  { id: 'cmd-find-companies', label: 'Find Companies', category: 'Actions' as const, icon: 'building-2' },
  { id: 'cmd-find-people', label: 'Find People', category: 'Actions' as const, icon: 'users' },
  { id: 'cmd-new-grid', label: 'Create New Grid', category: 'Actions' as const, icon: 'plus' },
  { id: 'cmd-toggle-theme', label: 'Toggle Dark Mode', category: 'Actions' as const, icon: 'moon' },
];
