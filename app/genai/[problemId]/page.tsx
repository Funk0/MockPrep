import { getGenAIProblemById, genaiProblems } from '@/lib/genaiProblems';
import { notFound } from 'next/navigation';
import GenAISession from '@/components/GenAISession';

export function generateStaticParams() {
  return genaiProblems.map((p) => ({ problemId: p.id }));
}

export default function GenAIPage({
  params,
}: {
  params: { problemId: string };
}) {
  const problem = getGenAIProblemById(params.problemId);
  if (!problem) notFound();

  return <GenAISession problem={problem} />;
}
