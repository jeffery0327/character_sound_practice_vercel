import { notFound } from 'next/navigation';
import { CharacterCard } from '@/ui/character-card'
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import db from '@/lib/db';

export function generateStaticParams() {
  return db.character.findMany({}).filter((r) => r.lession.id !== '').map((character) => ({
      lession: character.lession.slug,
      character: character.id,
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lession: string, character: string }>;
}) {
  const { lession: lessionSlug, character: characterSlug } = await params;
  const character = db.character.find({where: {characterId: characterSlug}});

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
