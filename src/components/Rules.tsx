import React from 'react';
import { motion } from 'framer-motion';
import DefinitionsSection from './DefinitionsSection';
import { Mode } from '../hooks/useGameLogic';

interface RulesProps {
  mode: Mode;
}

const Rules: React.FC<RulesProps> = ({ mode }) => {
  return (
    <motion.div
      className="w-full max-w-4xl mt-12 p-6 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <h2 className="font-rajdhani uppercase text-3xl font-bold text-blue-400 mb-4 border-b border-[#2A2A2A] pb-2 tracking-wider">
        Como Usar & Definições
      </h2>
      <div>
        <p className="mb-4 text-[#A0A0A0]">
          As Cartas de Acerto Crítico e Falha Crítica foram criadas para trazer
          mais emoção durante as partidas com o RPG Dungeons & Dragons 5e. Mas
          tome cuidado, pois os efeitos podem ser mortais em sua mesa de jogo.
          Combine com os jogadores de antemão se apenas os personagens irão usar
          essas cartas, os vilões ou toda e qualquer criatura!
        </p>
        <h3 className="font-rajdhani uppercase text-xl font-bold text-white mt-6 mb-2">
          Falha Crítica
        </h3>
        <p className="mb-4 text-[#A0A0A0]">
          Qualquer resultado de Falha Crítica que mudar o alvo do ataque, só
          terá efeito se o mesmo estiver dentro do alcance do ataque utilizado.
        </p>
        <DefinitionsSection />
        
      </div>
    </motion.div>
  );
};

export default Rules;
