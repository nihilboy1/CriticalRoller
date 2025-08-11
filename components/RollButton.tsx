import React from 'react';
import { motion } from 'framer-motion';
import { Mode } from '../hooks/useGameLogic';

interface RollButtonProps {
  mode: Mode;
  isRolling: boolean;
  isDisabled: boolean;
  onRoll: () => void;
}

const RollButton: React.FC<RollButtonProps> = ({ mode, isRolling, isDisabled, onRoll }) => {
  const rollButtonClasses = mode === 'hit'
    ? 'bg-lime-500 hover:bg-lime-600'
    : 'bg-red-600 hover:bg-red-700';

  return (
    <motion.button
      onClick={onRoll}
      disabled={isDisabled}
      className={`px-12 py-4 text-white font-rajdhani uppercase font-bold text-2xl tracking-wider rounded-lg shadow-lg transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400 ${rollButtonClasses}`}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {isRolling ? 'Rolando...' : (mode === 'hit' ? 'Rolar Crítico!' : 'Rolar Falha!')}
    </motion.button>
  );
};

export default RollButton;
