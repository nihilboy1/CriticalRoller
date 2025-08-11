export enum DamageType {
  Contusao = 'Contusão',
  Perfurante = 'Perfurante',
  Cortante = 'Cortante',
  Magico = 'Mágico',
}

export interface CardEffect {
  title: string;
  description: string;
}

export interface CriticalHitCard {
  id: number;
  effects: {
    [DamageType.Contusao]: CardEffect;
    [DamageType.Perfurante]: CardEffect;
    [DamageType.Cortante]: CardEffect;
    [DamageType.Magico]: CardEffect;
  };
}

export interface CriticalFumbleCard {
  id: number;
  effects: {
    [DamageType.Contusao]: CardEffect;
    [DamageType.Perfurante]: CardEffect;
    [DamageType.Cortante]: CardEffect;
    [DamageType.Magico]: CardEffect;
  };
}
