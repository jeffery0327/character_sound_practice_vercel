// 'use cache';

import { Boundary } from '@/ui/boundary';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import db from '@/lib/db';
import { LessionCard } from '@/ui/lession-card';

export default async function Page() {
  const lessions = db.lession.findMany({where: {}})
  
  return (
    <Boundary label="課程">
      <div className="flex flex-col gap-4">
        <div className='flex items-center justify-between'>
          <Link
            href={`/`}
            className="flex items-center gap-2 font-medium text-text-main hover:text-text-muted"
          >
            <ChevronLeftIcon className="size-6" />
            <div>返回</div>
          </Link>
          <h1 className="text-xl font-semibold text-text-main">
            All{' '}
            <span className="font-mono tracking-tighter">
              ({lessions.length})
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {lessions.map((lession) => {
            return (
              <LessionCard key={lession.id} lession={lession} baseUrl='/sound-radical-words' />
            )
          })}
        </div>
      </div>
    </Boundary>
  );
}
