import { CHAPTERS } from '../content/chapters';

export const CHAPTER_ROUTES = CHAPTERS.map((ch) => ({
  index: ch.index,
  id: ch.id,
  label: ch.shortTitle,
  title: ch.vietnameseTitle
}));
