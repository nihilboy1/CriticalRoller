import React from 'react';
import { DamageType, type CriticalHitCard, type CriticalFumbleCard, CardEffect } from '../../types';
import { Mode } from '../../hooks/useGameLogic';

interface ResultDisplayProps {
  mode: Mode;
  card: CriticalHitCard | CriticalFumbleCard;
  selectedType: DamageType;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ mode, card, selectedType }) => {
  const effect = (card.effects as Record<string, CardEffect>)[selectedType];
  const titleColor = mode === 'hit' ? 'text-lime-500' : 'text-red-500';

  return (
    <div className="p-6 md:p-8 flex flex-col items-center text-center w-full">
      <span className="font-rajdhani text-3xl font-bold text-[#555] opacity-70 absolute top-4 right-6">
        #{card.id}
      </span>
      <h3 className={`font-rajdhani uppercase text-2xl md:text-3xl font-bold ${titleColor} max-w-md`}>
        {effect.title}
      </h3>
      <div className="w-20 h-px bg-[#333] my-4"></div>
      <p className="font-inter text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-lg">
        {effect.description}
      </p>
    </div>
  );
};

export default ResultDisplay;
