export function calculateParallaxOffset(scrollY: number, speed: number, reducedMotion: boolean): number {
  if (reducedMotion) return 0;
  return -(scrollY * speed);
}
