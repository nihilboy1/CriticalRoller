import React from 'react';
import { motion } from 'framer-motion';
import { Mode } from '../hooks/useGameLogic';

interface ModeSwitcherProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

const ModeSwitcher: React.FC<ModeSwitcherProps> = ({ mode, onModeChange }) => {
  return (
    <div className="relative flex w-full max-w-xs items-center rounded-xl bg-[#1A1A1A] p-1 shadow-md mb-8">
      <motion.div
        layoutId="active-pill"
        className={`absolute top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-lg
          ${mode === 'hit' ? 'bg-lime-500' : 'bg-red-600'}`}
        style={{
          left: mode === 'hit' ? '0.25rem' : '50%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <motion.button
        onClick={() => onModeChange('hit')}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 w-1/2 py-2 font-rajdhani text-lg font-bold uppercase tracking-wider transition-colors duration-300 ${
          mode === 'hit' ? 'text-white' : 'text-[#A0A0A0] hover:text-white'
        }`}
        aria-pressed={mode === 'hit'}
      >
        Acerto Crítico
      </motion.button>
      <motion.button
        onClick={() => onModeChange('fumble')}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 w-1/2 py-2 font-rajdhani text-lg font-bold uppercase tracking-wider transition-colors duration-300 ${
          mode === 'fumble' ? 'text-white' : 'text-[#A0A0A0] hover:text-white'
        }`}
        aria-pressed={mode === 'fumble'}
      >
        Falha Crítica
      </motion.button>
    </div>
  );
};

export default ModeSwitcher;
