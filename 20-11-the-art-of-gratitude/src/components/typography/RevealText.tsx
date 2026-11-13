import React from 'react';
export const RevealText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`reveal-fade is-visible ${className}`}>{children}</div>
);
