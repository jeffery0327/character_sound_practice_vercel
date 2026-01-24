import { notFound } from 'next/navigation';
import { Boundary } from '@/ui/boundary';
import { data, Lession, Character, Sound } from '@/app/_internal/data'
import { CharacterCard } from '@/ui/character-card'
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export const runtime = 'edge'

export default async function Page({
  params,
}: {
  params: Promise<{ lession: string, character: string }>;
}) {
  const { lession: lessionSlug, character: characterSlug } = await params;
  const character: Character | undefined = data.character_learning_lessions.find(r => r.slug === lessionSlug)?.characters.find(r => r.id === characterSlug)

  if (!character) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8">
      <Link
        href={`/similar-words/${lessionSlug}`}
        className="flex items-center gap-2 font-medium text-text-main hover:text-text-muted"
      >
        <ChevronLeftIcon className="size-6 text-text-main" />
        <div>返回</div>
      </Link>

      <CharacterCard character={character} cardType='leader' />

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
        {character.similars.map((similar) => {
          return (
            <CharacterCard key={similar.id} character={similar} cardType='follower' />
          );
        })}
      </div>
    </div>
  );
}
