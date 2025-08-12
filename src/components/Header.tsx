import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  mode: 'hit' | 'fumble';
}

const Header: React.FC<HeaderProps> = ({ mode }) => {
  return (
    <div className="text-center mb-8">
      <div className="relative h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="font-rajdhani text-5xl md:text-7xl font-bold text-white uppercase tracking-widest absolute w-[90vw]"
          >
            {mode === 'hit' ? 'Acerto Crítico' : 'Falha Crítica'}
          </motion.h1>
        </AnimatePresence>
      </div>
      <p className="text-[#A0A0A0] mt-2 text-lg max-w-2xl">
        {mode === 'hit'
          ? 'O destino do seu inimigo está a um clique de distância.'
          : 'Até os melhores heróis tropeçam de vez em quando.'}
      </p>
    </div>
  );
};

export default Header;
