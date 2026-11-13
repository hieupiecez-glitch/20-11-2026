export type TextRevealVariant =
  | 'fade-in'
  | 'typewriter'
  | 'word-by-word'
  | 'char-by-char'
  | 'mask-reveal'
  | 'clip-path'
  | 'blur-to-focus'
  | 'letter-spacing'
  | 'scroll-triggered'
  | 'line-by-line';

export function getRevealClassName(variant: TextRevealVariant): string {
  const map: Record<TextRevealVariant, string> = {
    'fade-in': 'reveal-fade',
    'typewriter': 'reveal-typewriter',
    'word-by-word': 'reveal-words',
    'char-by-char': 'reveal-chars',
    'mask-reveal': 'reveal-mask',
    'clip-path': 'reveal-clip',
    'blur-to-focus': 'reveal-blur',
    'letter-spacing': 'reveal-spacing',
    'scroll-triggered': 'reveal-scroll',
    'line-by-line': 'reveal-lines'
  };
  return map[variant] || 'reveal-fade';
}
