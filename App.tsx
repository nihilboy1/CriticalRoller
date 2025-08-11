import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SoundProvider } from 'react-sounds';
import { useGameLogic } from './hooks/useGameLogic';
import DamageTypeSelector from './components/DamageTypeSelector';
import FumbleTypeSelector from './components/FumbleTypeSelector';
import ResultCard from './components/ResultCard';
import Rules from './components/Rules';
import Header from './components/Header';
import ModeSwitcher from './components/ModeSwitcher';
import RollButton from './components/RollButton';

const AppContent: React.FC = () => {
  const {
    mode,
    selectedType,
    drawnHitCard,
    drawnFumbleCard,
    isRolling,
    handleModeChange,
    handleTypeSelect,
    handleRoll,
  } = useGameLogic();

  const resultCardRef = useRef<HTMLDivElement>(null);

  const isRollButtonDisabled = isRolling || !selectedType;

  const mainBgClass =
    mode === 'hit'
      ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(132,204,22,0.15),rgba(255,255,255,0))]'
      : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.15),rgba(255,255,255,0))]';

  return (
    <main
      className={`min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-[#121212] ${mainBgClass} transition-all duration-500`}
    >
      <Header mode={mode} />
      <ModeSwitcher mode={mode} onModeChange={handleModeChange} />

      <div className="flex flex-col items-center gap-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full flex justify-center"
          >
            {mode === 'hit' ? (
              <DamageTypeSelector
                selectedType={selectedType}
                onSelect={handleTypeSelect}
                disabled={isRolling}
              />
            ) : (
              <FumbleTypeSelector
                selectedType={selectedType}
                onSelect={handleTypeSelect}
                disabled={isRolling}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <RollButton
          mode={mode}
          isRolling={isRolling}
          isDisabled={isRollButtonDisabled}
          onRoll={() => handleRoll(resultCardRef)}
        />

        {mode === 'hit' ? (
          <ResultCard
            ref={resultCardRef}
            mode="hit"
            card={drawnHitCard}
            selectedType={selectedType}
            isRolling={isRolling}
          />
        ) : (
          <ResultCard
            ref={resultCardRef}
            mode="fumble"
            card={drawnFumbleCard}
            selectedType={selectedType}
            isRolling={isRolling}
          />
        )}
      </div>

      <Rules mode={mode} />
    </main>
  );
};

const App: React.FC = () => (
  <SoundProvider>
    <AppContent />
  </SoundProvider>
);

export default App;
