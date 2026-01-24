// 'use cache';

import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import { Tabs } from '@/ui/tabs';
import { data, Lession } from '@/app/_internal/data'

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lession: string }>;
}) {
  const { lession: lessionSlug } = await params;
  const lession: Lession | undefined = data.character_learning_lessions.find(r => r.slug === lessionSlug)

  if (!lession) {
    notFound();
  }

  return (
    <Boundary label={lession.name} className="flex flex-col gap-9">
      <div>{children}</div>
    </Boundary>
  );
}
