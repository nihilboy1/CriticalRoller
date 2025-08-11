import { useState, useCallback, RefObject } from 'react';
import { useSound } from 'react-sounds';
import { DamageType, type CriticalHitCard, type CriticalFumbleCard } from '../types';
import { CRITICAL_HIT_CARDS } from '../constants/criticalHitData';
import { CRITICAL_FUMBLE_CARDS } from '../constants/criticalFumbleData';
import { SOUNDS } from '../constants/sounds';

export type Mode = 'hit' | 'fumble';

export const useGameLogic = () => {
  const [mode, setMode] = useState<Mode>('hit');
  const [selectedType, setSelectedType] = useState<DamageType | null>(null);
  const [drawnHitCard, setDrawnHitCard] = useState<CriticalHitCard | null>(null);
  const [drawnFumbleCard, setDrawnFumbleCard] = useState<CriticalFumbleCard | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const { play: playSwitch } = useSound(SOUNDS.MODE_SWITCH);
  const { play: playSelect } = useSound(SOUNDS.TYPE_SELECT);
  const { play: playHit } = useSound(SOUNDS.HIT_REVEAL);
  const { play: playFumble } = useSound(SOUNDS.FUMBLE_REVEAL);

  const handleModeChange = useCallback((newMode: Mode) => {
    if (newMode === mode) return;
    playSwitch();
    setMode(newMode);
    setSelectedType(null);
    setDrawnHitCard(null);
    setDrawnFumbleCard(null);
    setIsRolling(false);
  }, [mode, playSwitch]);

  const handleTypeSelect = useCallback((type: DamageType) => {
    playSelect();
    setSelectedType(type);
  }, [playSelect]);

  const handleRoll = useCallback((resultCardRef: RefObject<HTMLDivElement>) => {
    if (isRolling || !selectedType) return;

    setIsRolling(true);
    setDrawnHitCard(null);
    setDrawnFumbleCard(null);

    resultCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const rollDuration = 1200;

    setTimeout(() => {
      if (mode === 'hit') {
        const randomIndex = Math.floor(Math.random() * CRITICAL_HIT_CARDS.length);
        setDrawnHitCard(CRITICAL_HIT_CARDS[randomIndex]);
        playHit();
      } else {
        const randomIndex = Math.floor(Math.random() * CRITICAL_FUMBLE_CARDS.length);
        setDrawnFumbleCard(CRITICAL_FUMBLE_CARDS[randomIndex]);
        playFumble();
      }
      setIsRolling(false);
    }, rollDuration);
  }, [mode, isRolling, selectedType, playHit, playFumble]);

  return {
    mode,
    selectedType,
    drawnHitCard,
    drawnFumbleCard,
    isRolling,
    handleModeChange,
    handleTypeSelect,
    handleRoll,
  };
};
