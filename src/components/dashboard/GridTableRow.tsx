import { motion } from 'framer-motion';
import {
  ChevronDown, Star, MoreHorizontal,
  Users, Building2, Search, FileSpreadsheet, Globe,
} from 'lucide-react';
import { Avatar } from '../common/Avatar';
import { useGrid } from '../../context/GridContext';
import type { GridItem, GridIcon } from '../../types';

interface GridTableRowProps {
  grid: GridItem;
  index: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  users: Users,
  company: Building2,
  linkedin: Globe,
  salesforce: Globe,
  hubspot: Globe,
  google: Globe,
  search: Search,
  csv: FileSpreadsheet,
};

function GridTypeIcon({ icon, isFirst }: { icon: GridIcon; isFirst: boolean }) {
  const Icon = iconMap[icon.type] || Search;
  return (
    <div
      className="w-[21px] h-[21px] rounded-lg flex items-center justify-center border flex-shrink-0"
      style={{
        backgroundColor: 'var(--color-bg-white)',
        borderColor: 'var(--color-border-icon)',
        boxShadow: '2px 2px 4px rgba(0,0,0,0.04)',
        marginLeft: isFirst ? 0 : '-9px',
        zIndex: isFirst ? 3 : 1,
      }}
    >
      <Icon size={10} style={{ color: icon.color }} />
    </div>
  );
}

export function GridTableRow({ grid, index }: GridTableRowProps) {
  const { toggleStar } = useGrid();

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className="flex items-center h-10 border-b transition-colors duration-200 group"
      style={{
        backgroundColor: index % 2 === 0 ? 'var(--color-bg-alt-row)' : 'var(--color-bg-white)',
        borderColor: 'var(--color-border-light)',
      }}
      role="row"
    >
      {/* Expand + Star + Type Icons */}
      <div className="w-[80px] sm:w-[127px] flex-shrink-0 pl-2 sm:pl-4 flex items-center gap-1.5 sm:gap-2.5">
        <button
          className="cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          aria-label="Expand row"
        >
          <ChevronDown size={14} style={{ color: 'var(--color-text-muted)' }} />
        </button>

        <motion.button
          whileTap={{ scale: 1.3 }}
          onClick={() => toggleStar(grid.id)}
          className="cursor-pointer"
          aria-label={grid.isStarred ? 'Unstar grid' : 'Star grid'}
        >
          <Star
            size={14}
            fill={grid.isStarred ? '#FDB022' : 'none'}
            stroke={grid.isStarred ? '#FDB022' : '#9CA3AF'}
            strokeWidth={1.5}
          />
        </motion.button>

        <div className="flex items-center">
          {grid.icons.map((icon, i) => (
            <GridTypeIcon key={i} icon={icon} isFirst={i === 0} />
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="flex-1 min-w-0 px-2 sm:px-4" role="cell">
        <span className="text-xs truncate block" style={{ color: 'var(--color-text-primary)' }}>
          {grid.name}
        </span>
      </div>

      {/* Edited by — hidden below 380px, full width on desktop */}
      <div
        className="w-[177px] flex-shrink-0 px-2 sm:px-4 hidden min-[380px]:flex items-center gap-1.5 sm:gap-2.5"
        role="cell"
      >
        <Avatar name={grid.editedBy.name} color={grid.editedBy.avatarColor} size="sm" />
        <span className="text-xs truncate" style={{ color: 'var(--color-text-primary)' }}>
          {grid.editedBy.name}
        </span>
      </div>

      {/* Last edited — hidden on mobile */}
     <div className="w-[140px] flex-shrink-0 px-4 hidden sm:block" role="cell">
        <span className="text-xs" style={{ color: 'var(--color-text-primary)' }}>
          {grid.lastEdited}
        </span>
      </div>

      {/* Actions */}
      <div className="w-[60px] flex-shrink-0 px-2 flex justify-center" role="cell">
        <button
          className="p-1.5 rounded-[8.5px] transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
          style={{ color: 'var(--color-text-primary)' }}
          aria-label={`Actions for ${grid.name}`}
        >
          <MoreHorizontal size={14} />
        </button>
      </div>
    </motion.div>
  );
}