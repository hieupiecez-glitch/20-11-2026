import React from 'react';
export const SectionHeader: React.FC<{ code: string; title: string }> = ({ code, title }) => (
  <div className="text-center mb-10">
    <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-2">{code}</span>
    <h2 className="font-serif text-4xl text-ivory">{title}</h2>
  </div>
);
