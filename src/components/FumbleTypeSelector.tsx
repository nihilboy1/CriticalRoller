import React from "react";
import { motion } from "framer-motion";
import { DamageType } from "../../types";
import {
  BludgeoningIcon,
  PiercingIcon,
  SlashingIcon,
  MagicalIcon,
} from "../constants/icons";

interface FumbleTypeSelectorProps {
  selectedType: DamageType | null;
  onSelect: (type: DamageType) => void;
  disabled: boolean;
}

const fumbleTypeIcons = {
  [DamageType.Contusao]: <BludgeoningIcon />,
  [DamageType.Perfurante]: <PiercingIcon />,
  [DamageType.Cortante]: <SlashingIcon />,
  [DamageType.Magico]: <MagicalIcon />,
};

const FumbleTypeSelector: React.FC<FumbleTypeSelectorProps> = ({
  selectedType,
  onSelect,
  disabled,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
      {Object.values(DamageType).map((type) => {
        const isSelected = selectedType === type;
        const buttonClass = isSelected
          ? "bg-red-600 text-white ring-4 ring-red-600"
          : "bg-[#2A2A2A] text-[#A0A0A0] hover:bg-[#333333] hover:text-white ring-2 ring-transparent";

        return (
          <motion.button
            key={type}
            onClick={() => onSelect(type)}
            disabled={disabled}
            aria-pressed={isSelected}
            className={`flex items-center justify-center p-4 rounded-lg font-rajdhani uppercase font-bold text-lg tracking-wider shadow-lg transition-colors duration-200 ease-in-out ${buttonClass} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {fumbleTypeIcons[type]}
            {type}
          </motion.button>
        );
      })}
    </div>
  );
};

export default FumbleTypeSelector;
