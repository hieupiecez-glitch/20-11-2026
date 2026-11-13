import React from 'react';
export const Navbar: React.FC<{ currentChapter: number; onSelectChapter: (idx: number) => void }> = ({ currentChapter, onSelectChapter }) => (
  <nav aria-label="Điều hướng chương" className="flex items-center gap-2">
    {[0,1,2,3,4,5,6,7].map((i) => (
      <button key={i} type="button" onClick={() => onSelectChapter(i)} className={currentChapter === i ? 'text-gold font-bold' : 'text-ivory/70'}>
        0{i + 1}
      </button>
    ))}
  </nav>
);
