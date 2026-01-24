'use cache';

import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import { Tabs } from '@/ui/tabs';
import { Character, data } from '@/app/_internal/data'

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lession: string, character: string }>;
}) {
  const { lession: lessionSlug, character: characterSlug } = await params;
  console.log(lessionSlug)
  const character: Character | undefined = data.character_learning_lessions.find(r => r.slug === lessionSlug)?.characters.find(r => r.id == characterSlug)

  if (!character) {
    notFound();
  }

  return (
    <Boundary label={character.character} className="flex flex-col gap-9">
      {children}
    </Boundary>
  );
}
