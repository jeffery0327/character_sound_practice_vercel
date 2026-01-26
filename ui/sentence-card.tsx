'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { Sentence } from '@/lib/db';

type SentenceType = 'flippable' | 'test'

export function SentenceCard({
  sentence,
  sentenceType = 'flippable'
}: {
  sentence: Sentence;
  sentenceType?: SentenceType
}) {
  switch (sentenceType) {
    case 'flippable':
      return <FlippableSentenceCard sentence={sentence} />;
    case 'test':
      return <TestSentenceCard sentence={sentence} />;
  }
}

function FlippableSentenceCard({ sentence }: { sentence: Sentence }){
    const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={clsx(
        'relative min-h-40 rounded-lg transition-transform duration-500 transform-style-preserve-3d',
        flipped && 'rotate-y-180'
      )}
      onClick={() => {
        setFlipped(v => !v);
      }}
    >
      {/* 正面 */}
      <div className={clsx(
        'absolute inset-0 backface-hidden rotate-y-0',
        'flex flex-col gap-2',
        'group hover:bg-primary',
        'p-1 bg-card rounded-lg min-h-40',
        'border-2 border-orange-500',
        'shadow-lg shadow-orange-500/50'
      )}>
        <div className='group group-hover:bg-primary rounded-lg bg-card flex-1 flex flex-col justify-center px-2'>
          <div className=''>
            <p className='text-3xl font-extrabold text-text-main text-center'>
              {sentence.format}
            </p>
          </div>
        </div>
      </div>

      {/* 背面 */}
      <div className={clsx(
        'absolute inset-0 backface-hidden rotate-y-180',
        'flex flex-col gap-2',
        'group hover:bg-primary',
        'p-1 bg-card rounded-lg min-h-40',
        'border-2 border-orange-500',
        'shadow-lg shadow-orange-500/50'
      )}>
        <div
          className='absolute inset-2 group group-hover:bg-primary rounded-lg flex flex-col justify-center items-center p-2'
        >
            <div className="rounded-lg flex flex-col gap-2 font-semibold text-text-main whitespace-pre-line">
                <p className='text-ms leading-8'>
                    {sentence.sample}
                </p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

function TestSentenceCard({ sentence }: { sentence: Sentence }) {
    return (
        <div className='flex flex-col gap-2 group hover:bg-primary p-1 bg-card rounded-lg min-h-40 border-2 border-orange-500 shadow-lg shadow-orange-500/50'>
            <div className='group group-hover:bg-primary rounded-lg bg-card flex-1 flex border-1 border-dashed border-gray-200 px-2'>
                <p className='text-xl font-bold text-text-main self-center'>
                    {sentence.format}
                </p>
            </div>
            <div
                className='group group-hover:bg-primary rounded-lg bg-card flex-9 border-1 border-dashed border-gray-200 pl-2 pt-2'
            >
                <p className='text-xl font-bold text-text-main self-center'>
                    {sentence.sample}
                </p>
            </div>
        </div>
    )
}
