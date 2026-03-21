export type { Difficulty, GenAIProblem } from '@/data/genaiProblems';
export { genaiProblems } from '@/data/genaiProblems';

import { genaiProblems as _problems } from '@/data/genaiProblems';
import type { GenAIProblem } from '@/data/genaiProblems';

export function getGenAIProblemById(id: string): GenAIProblem | undefined {
  return _problems.find((p) => p.id === id);
}
