import React from 'react';
export const ChapterVeil: React.FC<{ active: boolean; code: string; name: string }> = ({ active, code, name }) => (
  <div className={`fixed inset-0 z-50 pointer-events-none transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`}>
    <span>{code} — {name}</span>
  </div>
);
