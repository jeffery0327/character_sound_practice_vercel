import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import db from '@/lib/db';

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lession: string, character: string }>;
}) {
  const { lession: lessionSlug, character: characterSlug } = await params;
  const character = db.character.find({where: {characterId: characterSlug}});

  if (!character) {
    notFound();
  }

  return (
    <Boundary label={character.character} className="flex flex-col gap-9">
      <Suspense fallback={<div>Loading runtime data...</div>}>
        {children}
      </Suspense>
    </Boundary>
  );
}
