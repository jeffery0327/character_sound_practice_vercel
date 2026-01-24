// 'use cache';

import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import { data, SentenceLession } from '@/app/_internal/data'

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lession: string }>;
}) {
  const { lession: lessionSlug } = await params;
  const lession: SentenceLession | undefined = data.sentence_learning_lessions.find(r => r.slug === lessionSlug)

  if (!lession) {
    notFound();
  }

  return (
    <Boundary label={lession.name} className="flex flex-col gap-9">
      <div>{children}</div>
    </Boundary>
  );
}
