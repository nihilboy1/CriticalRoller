import React, { useState, useEffect } from "react";
import { useSound } from "react-sounds";
import { SOUNDS } from "../../constants/sounds";
import { Mode } from "../../hooks/useGameLogic";

interface RollingStateProps {
  mode: Mode;
  cardCount: number;
}

const RollingState: React.FC<RollingStateProps> = ({ mode, cardCount }) => {
  const [displayNumber, setDisplayNumber] = useState<number>(1);
  const { play } = useSound(SOUNDS.ROLL_TICK);

  useEffect(() => {
    if (cardCount === 0) return;
    const interval = window.setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * cardCount) + 1);
      play();
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, [play, cardCount]);

  const rollingColor = mode === "hit" ? "text-lime-500" : "text-red-500";

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div
        className={`font-rajdhani font-bold text-8xl md:text-9xl ${rollingColor} animate-pulse`}
      >
        {displayNumber.toString().padStart(2, "0")}
      </div>
      <p className="mt-4 text-[#A0A0A0] text-xl font-rajdhani uppercase tracking-wider">
        Rolando...
      </p>
    </div>
  );
};

export default RollingState;
