// 'use cache';

import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import { data, Lession, Character, Sound } from '@/app/_internal/data'
import { CharacterCard } from '@/ui/character-card'
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';


export async function generateStaticParams() {
  return data.character_learning_lessions.map(({ slug }) => ({ lession: slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lession: string }>;
}) {
  const { lession: lessionSlug } = await params;
  const lession: Lession = data.character_learning_lessions.filter(r => r.slug === lessionSlug)?.[0]

  if (!lession) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className='flex items-center justify-between'>
        <Link
          href={`/sound-radical-words`}
          className="flex items-center gap-2 font-medium text-text-main hover:text-text-muted"
        >
          <ChevronLeftIcon className="size-6" />
          <div>返回</div>
        </Link>
        <h1 className="text-xl font-semibold text-text-main">
          All{' '}
          <span className="font-mono tracking-tighter">
            ({data.character_learning_lessions.length})
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {lession.characters.map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
              cardType='flippable'
            />
          );
        })}
      </div>
    </div>
  );
}
