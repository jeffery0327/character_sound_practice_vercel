'use cache';

import { Boundary } from '@/ui/boundary';
import Link from 'next/link';
import { LinkStatus } from '@/ui/link-status'
import { data } from '@/app/_internal/data'
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default async function Page() {

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
              ({data.character_learning_lessions.length})
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {data.character_learning_lessions.map((lession) => {
            return (
              <Link
                href={`/similar-words/${lession.slug}`}
                key={lession.name}
                className="group flex flex-col gap-1 rounded-lg bg-card px-5 py-3 hover:bg-primary"
              >
                <div className="flex items-center justify-between font-medium text-text-main group-hover:text-text-muted">
                  {lession.name} <LinkStatus />
                </div>

                {lession.description ? (
                  <div className="line-clamp-3 text-[13px] text-text-muted group-hover:text-text-muted">
                    {lession.description}
                  </div>
                ) : null}
              </Link>
            )
          })}

        </div>
      </div>
    </Boundary>
  );
}
