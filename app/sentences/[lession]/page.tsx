// 'use cache';

import { notFound } from 'next/navigation';
import { data, SentenceLession, Character, Sound, Sentence } from '@/app/_internal/data'
import { CharacterCard } from '@/ui/character-card'
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { SentenceCard } from '@/ui/sentence-card';


export async function generateStaticParams() {
  return data.sentence_learning_lessions.map(({ slug }) => ({ lession: slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ lession: string }>;
}) {
  const { lession: lessionSlug } = await params;
  const lession: SentenceLession | undefined = data.sentence_learning_lessions.find(r => r.slug === lessionSlug)

  if (!lession) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className='flex items-center justify-between'>
        <Link
          href={`/sentences`}
          className="flex items-center gap-2 font-medium text-text-main hover:text-text-muted"
        >
          <ChevronLeftIcon className="size-6" />
          <div>返回</div>
        </Link>
        <h1 className="text-xl font-semibold text-text-main">
          All{' '}
          <span className="font-mono tracking-tighter">
            ({data.sentence_learning_lessions.length})
          </span>
        </h1>
      </div>


      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {lession.sentences.map((sentence: Sentence) => {
          return (
            <SentenceCard key={sentence.id} sentence={sentence} sentenceType='flippable'/>
          );
        })}
      </div>
    </div>
  );
}
