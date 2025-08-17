import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import {
  DamageType,
  type CriticalHitCard,
  type CriticalFumbleCard,
} from "../../types";

interface AllResultsListProps {
  mode: "hit" | "fumble";
  selectedType: DamageType | null;
  cards: CriticalHitCard[] | CriticalFumbleCard[];
  isRolling: boolean;
}

const AllResultsList: React.FC<AllResultsListProps> = ({
  mode,
  selectedType,
  cards,
  isRolling,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonText = mode === "hit" 
    ? "Mostrar todos os Acertos Críticos" 
    : "Mostrar todos os Erros Críticos";

  const collapseText = mode === "hit" 
    ? "Ocultar Acertos Críticos" 
    : "Ocultar Erros Críticos";

  const isDisabled = !selectedType || isRolling;

  const filteredResults = selectedType 
    ? cards.map(card => ({
        id: card.id,
        effect: card.effects[selectedType]
      }))
    : [];

  const toggleExpanded = () => {
    if (!isDisabled) {
      setIsExpanded(!isExpanded);
    }
  };

  const buttonColorClass = mode === "hit"
    ? "bg-lime-600/20 border-lime-500/50 text-lime-400 hover:bg-lime-600/30 hover:border-lime-500/70"
    : "bg-red-600/20 border-red-500/50 text-red-400 hover:bg-red-600/30 hover:border-red-500/70";

  const disabledColorClass = "bg-gray-600/20 border-gray-500/30 text-gray-500 cursor-not-allowed";

  const listColorClass = mode === "hit"
    ? "bg-lime-950/30 border-lime-500/20"
    : "bg-red-950/30 border-red-500/20";

  const cardColorClass = mode === "hit"
    ? "bg-lime-900/20 border-lime-500/30 hover:bg-lime-900/30"
    : "bg-red-900/20 border-red-500/30 hover:bg-red-900/30";

  return (
    <div className="w-full max-w-3xl">
      <motion.button
        onClick={toggleExpanded}
        disabled={isDisabled}
        className={`w-full p-4 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 ${
          isDisabled ? disabledColorClass : buttonColorClass
        }`}
        whileHover={!isDisabled ? { scale: 1.02 } : {}}
        whileTap={!isDisabled ? { scale: 0.98 } : {}}
      >
        <span className="font-medium">
          {isExpanded ? collapseText : buttonText}
        </span>
        {!isDisabled && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoChevronDown className="w-5 h-5" />
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence>
        {isExpanded && selectedType && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`mt-4 rounded-lg border ${listColorClass} overflow-hidden`}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Todos os {mode === "hit" ? "Acertos" : "Erros"} Críticos - {selectedType}
              </h3>
              <div className="max-h-96 overflow-y-auto space-y-3">
                {filteredResults.map(({ id, effect }) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: id * 0.02 }}
                    className={`p-3 rounded-lg border ${cardColorClass} transition-colors duration-200`}
                  >
                    <div className="flex  gap-3 items-center">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">
                        {id}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {effect.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {effect.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-400">
                Total: {filteredResults.length} resultados possíveis
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedType && !isRolling && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-center text-sm text-gray-500"
        >
          Selecione um tipo de dano para ver todos os resultados possíveis
        </motion.div>
      )}
    </div>
  );
};

export default AllResultsList;
