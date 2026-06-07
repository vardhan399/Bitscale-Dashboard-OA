import { motion } from 'framer-motion';
import { TutorialCard } from './TutorialCard';
import { DemoProgressCard } from './DemoProgressCard';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function ContentCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row gap-6"
    >
      <motion.div variants={itemVariants} className="flex-1 min-w-0">
        <TutorialCard />
      </motion.div>
      <motion.div variants={itemVariants} className="flex-1 min-w-0">
        <DemoProgressCard />
      </motion.div>
    </motion.div>
  );
}
