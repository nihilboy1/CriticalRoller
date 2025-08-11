import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DamageType, type CriticalHitCard, type CriticalFumbleCard } from '../types';
import InitialState from './result-card/InitialState';
import RollingState from './result-card/RollingState';
import ResultDisplay from './result-card/ResultDisplay';
import { Mode } from '../hooks/useGameLogic';

type ResultCardProps = {
  isRolling: boolean;
} & (
  | {
      mode: 'hit';
      card: CriticalHitCard | null;
      selectedType: DamageType | null;
    }
  | {
      mode: 'fumble';
      card: CriticalFumbleCard | null;
      selectedType: DamageType | null;
    }
);

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ResultCard = React.forwardRef<HTMLDivElement, ResultCardProps>((props, ref) => {
  const { isRolling, mode } = props;

  const renderContent = () => {
    if (isRolling) {
      return <RollingState mode={mode} />;
    }

    if (props.card && props.selectedType) {
      return <ResultDisplay mode={mode} card={props.card} selectedType={props.selectedType} />;
    }

    return <InitialState />;
  };

  const activeBorderClass =
    mode === 'hit'
      ? 'border-lime-500/80 shadow-lime-500/20'
      : 'border-red-600/80 shadow-red-800/20';

  const borderClass = isRolling || props.card ? activeBorderClass : 'border-[#2A2A2A]';

  return (
    <motion.div
      ref={ref}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative w-full max-w-3xl min-h-[20rem] bg-[#1A1A1A] rounded-xl shadow-2xl border ${borderClass} transition-colors duration-300 overflow-hidden flex justify-center items-center p-4`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isRolling ? 'rolling' : props.card ? `result-${props.card.id}` : 'initial'}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

export default ResultCard;
