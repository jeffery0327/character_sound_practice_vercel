import { notFound } from 'next/navigation';
import { CharacterCard } from '@/ui/character-card'
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { findAllLessionPaths, findByLessionIdCompletedCharacters, findBySlugLession } from '@/lib/supabase/db';

export async function generateStaticParams() {
  return await findAllLessionPaths();
}

export default async function Page({
  params,
}: {
  params: Promise<{ lession: string }>;
}) {
  const { lession: lessionSlug } = await params;
  const lession = await findBySlugLession(lessionSlug);

  if (!lession) {
    notFound();
  }

  const characters = await findByLessionIdCompletedCharacters(lession.id);

  return (
    <div className="flex flex-col gap-4">
      <div className='flex items-center justify-between'>
        <Link
          href={`/similar-words`}
          className="flex items-center gap-2 font-medium text-text-main hover:text-text-muted"
        >
          <ChevronLeftIcon className="size-6" />
          <div>返回</div>
        </Link>
        <h1 className="text-xl font-semibold text-text-main">
          All{' '}
          <span className="font-mono tracking-tighter">
            ({characters.length})
          </span>
        </h1>
      </div>


      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {characters.map((character) => {
          return (
            <Link
              href={`/similar-words/${lession.slug}/${character.id.toString()}`}
              key={character.id}
              className=""
            >
              <CharacterCard
                key={character.id}
                character={character}
                cardType='fixed'
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
