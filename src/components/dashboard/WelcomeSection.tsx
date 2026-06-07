import { motion } from 'framer-motion';
import { Building2, Users, Plus } from 'lucide-react';
import { Button } from '../common/Button';

interface WelcomeSectionProps {
  onFindPeople: () => void;
  onNewGrid: () => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

export function WelcomeSection({ onFindPeople, onNewGrid }: WelcomeSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <motion.div variants={itemVariants}>
        <h1
          className="text-lg font-semibold"
          style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.44px' }}
        >
          Welcome back, Tim!
        </h1>
        <p
          className="text-sm mt-1"
          style={{ color: 'var(--color-text-secondary)', letterSpacing: '-0.15px' }}
        >
          Here's your daily scoop on Bitscale!
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<Building2 size={14} style={{ color: '#438361' }} />}
        >
          Find Companies
        </Button>
        <Button
          variant="secondary"
          size="sm"
          leftIcon={<Users size={14} style={{ color: '#8F65AF' }} />}
          onClick={onFindPeople}
        >
          Find People
        </Button>
        <Button
          variant="primary"
          size="md"
          leftIcon={<Plus size={14} />}
          onClick={onNewGrid}
        >
          New Grid
        </Button>
      </motion.div>
    </motion.div>
  );
}
