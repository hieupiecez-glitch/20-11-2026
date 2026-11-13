import React from 'react';
import { BookPages, BookSpreadData } from './BookPages';
import { FloatingWords } from './FloatingWords';

export interface Book3DProps {
  isOpen: boolean;
  spreadIndex: number;
  spreads: BookSpreadData[];
  selectedWordIndex: number;
  orbitPaused: boolean;
  onToggleOpen: () => void;
  onNextPage: () => void;
  onPrevPage: () => void;
  onSelectWord: (idx: number) => void;
}

export const Book3D: React.FC<Book3DProps> = ({
  isOpen,
  spreadIndex,
  spreads,
  selectedWordIndex,
  orbitPaused,
  onToggleOpen,
  onNextPage,
  onSelectWord
}) => {
  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center">
      <FloatingWords
        selectedIndex={selectedWordIndex}
        paused={orbitPaused}
        onSelectWord={onSelectWord}
      />
      <BookPages
        isOpen={isOpen}
        spread={spreads[spreadIndex] || spreads[0]}
        spreadIndex={spreadIndex}
        totalSpreads={spreads.length}
        onToggleOpen={onToggleOpen}
        onNextPage={onNextPage}
      />
    </div>
  );
};
