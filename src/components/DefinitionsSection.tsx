import React from "react";

const DefinitionsSection: React.FC = () => (
  <>
    <h3 className="font-rajdhani uppercase text-xl font-bold text-white mt-6 mb-2">
      Definições
    </h3>

    <ul className="list-disc list-inside space-y-2 text-[#A0A0A0]">
      <li>
        <strong className="font-semibold text-[#EAEAEA]">Tratamento:</strong> As
        enfermidades podem ser removidas através de descanso curto ou longo,
        cura mágica ou teste de Sabedoria (Medicina). Se esse teste for
        realizado por outra criatura: CD 15. Se for realizado pela própria
        criatura: CD 20.
      </li>
      <li>
        <strong className="font-semibold text-[#EAEAEA]">Marcado:</strong>{" "}
        Ataques contra uma criatura marcada possuem{" "}
        <a
          href="https://5e.tools/variantrules.html#advantage_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Vantagem
        </a>
        .
      </li>
      <li>
        <strong className="font-semibold text-[#EAEAEA]">Condições:</strong>{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#grappled_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Agarrado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#frightened_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          amedrontado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#stunned_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          atordoado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#prone_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          caído
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#blinded_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          cego
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#charmed_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          enfeitiçado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#poisoned_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          envenenado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#restrained_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          impedido
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#incapacitated_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          incapacitado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#unconscious_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          inconsciente
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#invisible_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          invisível
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#paralyzed_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          paralisado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#petrified_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          petrificado
        </a>
        ,{" "}
        <a
          href="https://5e.tools/conditionsdiseases.html#deafened_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          surdo
        </a>
        .{" "}
      </li>
      <li>
        <strong className="text-[#EAEAEA]">
          Regras de Resistência e Vulnerabilidade a Dano:{" "}
        </strong>{" "}
        <a
          href="https://5e.tools/variantrules.html#resistance_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Resistência
        </a>
        ,{" "}
        <a
          href="https://5e.tools/variantrules.html#vulnerability_xphb"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          vulnerabilidade
        </a>
      </li>
    </ul>
  </>
);

export default DefinitionsSection;
