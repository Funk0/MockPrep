export type { Difficulty, Problem } from '@/data/problems';
export { problems } from '@/data/problems';

import { problems as _problems } from '@/data/problems';
import type { Problem } from '@/data/problems';

export function getProblemById(id: string): Problem | undefined {
  return _problems.find((p) => p.id === id);
}
