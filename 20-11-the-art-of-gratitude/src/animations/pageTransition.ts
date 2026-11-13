export interface TransitionState {
  active: boolean;
  chapterCode: string;
  chapterTitle: string;
}

export function triggerChapterVeil(
  code: string,
  title: string,
  onMidpoint: () => void,
  onComplete: () => void
): void {
  setTimeout(onMidpoint, 180);
  setTimeout(onComplete, 500);
}
