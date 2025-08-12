import { useState, useEffect } from 'react';
import { type CriticalHitCard, type CriticalFumbleCard } from '../../types';

export const useCardData = () => {
  const [criticalHitCards, setCriticalHitCards] = useState<CriticalHitCard[]>([]);
  const [criticalFumbleCards, setCriticalFumbleCards] = useState<CriticalFumbleCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const hitResponse = await fetch('/data/criticalHitData.json');
        const fumbleResponse = await fetch('/data/criticalFumbleData.json');
        const hitData = await hitResponse.json();
        const fumbleData = await fumbleResponse.json();
        setCriticalHitCards(hitData);
        setCriticalFumbleCards(fumbleData);
      } catch (error) {
        console.error("Failed to fetch card data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, []);

  return { criticalHitCards, criticalFumbleCards, loading };
};
