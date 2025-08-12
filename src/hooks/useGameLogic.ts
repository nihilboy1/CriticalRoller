import { useState, useCallback, RefObject } from "react";
import { useSound } from "react-sounds";
import {
  DamageType,
  type CriticalHitCard,
  type CriticalFumbleCard,
} from "../../types";
import { SOUNDS } from "../constants/sounds";
import { useCardData } from "./useCardData";
import { getRandomItem } from "../utils/arrayUtils";

export type Mode = "hit" | "fumble";

export const useGameLogic = () => {
  const { criticalHitCards, criticalFumbleCards, loading } = useCardData();
  const [mode, setMode] = useState<Mode>("hit");
  const [selectedType, setSelectedType] = useState<DamageType | null>(null);
  const [drawnHitCard, setDrawnHitCard] = useState<CriticalHitCard | null>(
    null
  );
  const [drawnFumbleCard, setDrawnFumbleCard] =
    useState<CriticalFumbleCard | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const { play: playSwitch } = useSound(SOUNDS.MODE_SWITCH);
  const { play: playSelect } = useSound(SOUNDS.TYPE_SELECT);
  const { play: playHit } = useSound(SOUNDS.HIT_REVEAL);
  const { play: playFumble } = useSound(SOUNDS.FUMBLE_REVEAL);

  const handleModeChange = useCallback(
    (newMode: Mode) => {
      if (newMode === mode) return;
      playSwitch();
      setMode(newMode);
      setSelectedType(null);
      setDrawnHitCard(null);
      setDrawnFumbleCard(null);
      setIsRolling(false);
    },
    [mode, playSwitch]
  );

  const handleTypeSelect = useCallback(
    (type: DamageType) => {
      playSelect();
      setSelectedType(type);
    },
    [playSelect]
  );

  const handleRoll = useCallback(
    (resultCardRef: RefObject<HTMLDivElement>) => {
      if (isRolling || !selectedType || loading) return;

      setIsRolling(true);
      setDrawnHitCard(null);
      setDrawnFumbleCard(null);

      resultCardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      const rollDuration = 1200;

      setTimeout(() => {
        if (mode === "hit") {
          setDrawnHitCard(getRandomItem(criticalHitCards) || null);
          playHit();
        } else {
          setDrawnFumbleCard(getRandomItem(criticalFumbleCards) || null);
          playFumble();
        }
        setIsRolling(false);
      }, rollDuration);
    },
    [
      mode,
      isRolling,
      selectedType,
      playHit,
      playFumble,
      criticalHitCards,
      criticalFumbleCards,
      loading,
    ]
  );

  return {
    mode,
    selectedType,
    drawnHitCard,
    drawnFumbleCard,
    isRolling,
    handleModeChange,
    handleTypeSelect,
    handleRoll,
    criticalHitCards,
    criticalFumbleCards,
  };
};
