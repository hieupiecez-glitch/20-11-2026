import React from 'react';

export interface BookSpreadData {
  leftHeader: string;
  leftNum: string;
  leftMain: string;
  leftSub: string;
  rightHeader: string;
  rightNum: string;
  rightMain: string;
  rightReflection: string;
}

interface BookPagesProps {
  isOpen: boolean;
  spread: BookSpreadData;
  spreadIndex: number;
  totalSpreads: number;
  onToggleOpen: () => void;
  onNextPage: () => void;
}

export const BookPages: React.FC<BookPagesProps> = ({
  isOpen,
  spread,
  spreadIndex,
  totalSpreads,
  onToggleOpen,
  onNextPage
}) => {
  if (!isOpen) {
    return (
      <div
        onClick={onToggleOpen}
        className="cursor-pointer w-[300px] sm:w-[360px] h-[410px] rounded-r-2xl bg-gradient-to-br from-burgundy via-burgundy-deep to-midnight-deep border-2 border-gold/70 shadow-2xl p-8 flex flex-col justify-between text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Ấn Bản Nghệ Thuật Tri Ân • 20.11</p>
        <div>
          <h3 className="font-serif font-bold text-3xl text-champagne">NHỮNG ĐIỀU THẦY CÔ ĐỂ LẠI</h3>
          <p className="font-hand text-lg text-gold-light mt-2">The Book of Gratitude</p>
        </div>
        <span className="px-4 py-1.5 rounded-full bg-gold/20 border border-gold/50 text-xs text-champagne">
          Nhấn để mở sách 3D →
        </span>
      </div>
    );
  }

  return (
    <div
      onClick={onNextPage}
      className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl bg-ivory text-midnight"
    >
      <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-gold/30 flex flex-col justify-between">
        <div className="flex justify-between text-xs text-gold-dark font-semibold">
          <span>{spread.leftHeader}</span>
          <span>{spread.leftNum}</span>
        </div>
        <div className="my-6">
          <p className="font-serif italic font-semibold text-2xl mb-3">{spread.leftMain}</p>
          <p className="text-sm text-midnight/80">{spread.leftSub}</p>
        </div>
        <span className="font-hand text-burgundy">Những điều thầy cô để lại</span>
      </div>
      <div className="p-6 sm:p-8 flex flex-col justify-between">
        <div className="flex justify-between text-xs text-gold-dark font-semibold">
          <span>{spread.rightHeader}</span>
          <span>{spread.rightNum}</span>
        </div>
        <div className="my-6">
          <p className="font-serif italic font-semibold text-2xl text-burgundy mb-3">{spread.rightMain}</p>
          <p className="text-sm text-midnight/80">{spread.rightReflection}</p>
        </div>
        <span className="text-xs text-burgundy">Trang đôi {spreadIndex + 1} / {totalSpreads} →</span>
      </div>
    </div>
  );
};
