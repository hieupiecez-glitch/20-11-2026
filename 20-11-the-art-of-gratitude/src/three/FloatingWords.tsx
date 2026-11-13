import React from 'react';
import { ORBIT_WORDS } from '../content/messages';

interface FloatingWordsProps {
  selectedIndex: number;
  paused: boolean;
  onSelectWord: (index: number) => void;
}

export const FloatingWords: React.FC<FloatingWordsProps> = ({ selectedIndex, onSelectWord }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {ORBIT_WORDS.map((item, idx) => (
        <button
          key={item.word}
          type="button"
          onClick={() => onSelectWord(idx)}
          className={`pointer-events-auto px-3 py-1.5 rounded-full border text-xs sm:text-sm font-serif italic transition-all ${
            idx === selectedIndex
              ? 'bg-gold text-midnight border-ivory font-semibold'
              : 'bg-midnight-deep/85 text-champagne border-gold/45'
          }`}
        >
          “{item.word}”
        </button>
      ))}
    </div>
  );
};
