import React from 'react';
export const SoundController: React.FC<{ enabled: boolean; onToggle: () => void }> = ({ enabled, onToggle }) => (
  <button type="button" onClick={onToggle}>{enabled ? 'Âm thanh: Bật' : 'Âm thanh: Tắt'}</button>
);
