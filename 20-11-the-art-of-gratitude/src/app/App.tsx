import React, { useState } from 'react';
import { CHAPTERS } from '../content/chapters';
import { ORBIT_WORDS } from '../content/messages';
import { ParticleField } from '../three/ParticleField';
import { Book3D } from '../three/Book3D';

export default function App() {
  const [bookOpen, setBookOpen] = useState(false);
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [orbitPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const spreads = [
    {
      leftHeader: 'BÀI HỌC VỀ SỰ KIÊN NHẪN',
      leftNum: '01',
      leftMain: '“Thầy cô không chỉ dạy ta cách giải một bài toán.”',
      leftSub: '“Thầy cô còn dạy ta cách kiên nhẫn trước những điều chưa biết.”',
      rightHeader: 'DIỄN ĐẠT CHÍNH MÌNH',
      rightNum: '02',
      rightMain: '“Không chỉ dạy ta viết nên một câu văn.”',
      rightReflection: '“Mà còn giúp ta biết cách diễn đạt những suy nghĩ của chính mình.”'
    },
    {
      leftHeader: 'TRAO GỬI NIỀM TIN',
      leftNum: '03',
      leftMain: '“Không chỉ truyền đạt kiến thức.”',
      leftSub: '“Mà còn trao cho ta niềm tin để bước tiếp.”',
      rightHeader: 'NGỌN ĐÈN DẪN LỐI',
      rightNum: '04',
      rightMain: '“Có những người không đi cùng ta suốt cuộc đời…”',
      rightReflection: '“…nhưng những điều họ dạy sẽ theo ta đến tận cuối con đường.”'
    }
  ];

  return (
    <div className="min-h-screen bg-midnight text-ivory relative">
      <ParticleField reducedMotion={reducedMotion} />
      <header className="fixed top-0 left-0 right-0 z-40 bg-midnight/85 backdrop-blur-md border-b border-gold/20 px-6 h-16 flex items-center justify-between">
        <span className="font-serif font-bold text-gold tracking-wider">20/11 — THE ART OF GRATITUDE</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setReducedMotion((v) => !v)}
            className="px-3 py-1 rounded-full border border-gold/30 text-xs text-champagne"
          >
            {reducedMotion ? 'Motion: Tối giản' : 'Motion: Đầy đủ'}
          </button>
        </div>
      </header>

      <main className="pt-16 relative z-10">
        {CHAPTERS.map((ch) => (
          <section key={ch.id} id={ch.id} className="min-h-screen py-20 px-6 flex flex-col items-center justify-center text-center border-b border-gold/10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{ch.code} • {ch.englishTitle}</span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ivory font-semibold mb-4">{ch.vietnameseTitle}</h2>
            <p className="font-serif italic text-xl sm:text-2xl text-champagne max-w-3xl mb-3">{ch.leadQuote}</p>
            <p className="text-sm sm:text-base text-ivory/80 max-w-2xl mb-8">{ch.subQuote}</p>

            {ch.index === 2 && (
              <div className="w-full max-w-5xl my-6">
                <Book3D
                  isOpen={bookOpen}
                  spreadIndex={spreadIndex}
                  spreads={spreads}
                  selectedWordIndex={selectedWordIndex}
                  orbitPaused={orbitPaused}
                  onToggleOpen={() => setBookOpen((o) => !o)}
                  onNextPage={() => setSpreadIndex((i) => (i + 1) % spreads.length)}
                  onPrevPage={() => setSpreadIndex((i) => (i - 1 + spreads.length) % spreads.length)}
                  onSelectWord={(idx) => setSelectedWordIndex(idx)}
                />
                <div className="mt-6 p-5 rounded-2xl border border-gold/30 bg-midnight-card max-w-xl mx-auto">
                  <h3 className="font-serif text-2xl text-champagne mb-1">“{ORBIT_WORDS[selectedWordIndex].word}”</h3>
                  <p className="text-xs sm:text-sm text-ivory/85">{ORBIT_WORDS[selectedWordIndex].description}</p>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
