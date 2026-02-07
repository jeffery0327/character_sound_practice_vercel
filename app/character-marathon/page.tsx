

import { Boundary } from '@/ui/boundary';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import db, { Character } from '@/lib/db';
import { CharacterMarathonBoard } from '@/ui/character-marathon-board/character-marathon-board';

export default async function Page() {
  const characters = db.character.findMany({ where: {} });
  const sounds = db.sound.findMany({ where: {} });

  return (
    <Boundary label="生字馬拉松">
      <div className="flex flex-col gap-4">
        <div className='flex items-center justify-between'>
          <Link
            href={`/`}
            className="flex items-center gap-2 font-medium text-text-main hover:text-text-muted"
          >
            <ChevronLeftIcon className="size-6" />
            <div>返回</div>
          </Link>
        </div>
        <CharacterMarathonBoard characters={characters} sounds={sounds} />
      </div>
    </Boundary>
  );
}