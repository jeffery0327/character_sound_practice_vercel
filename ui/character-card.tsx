'use client';

import { useState } from 'react';
import { Character, Sound } from '@/app/_internal/data'
import clsx from 'clsx';

type CardType = 'flippable' | 'fixed' | 'leader' | 'follower' | 'test'

export function CharacterCard({
  character,
  cardType = 'flippable'
}: {
  character: Character;
  cardType?: CardType
}) {
  switch (cardType) {
    case 'flippable':
      return <FlippableCharacterCard characterInfo={character} />;
    case 'fixed':
      return <FixedHoverableOneSideCharacterCard characterInfo={character} />;
    case 'leader':
      return <FixedOneSideCharacterCard characterInfo={character} isLeader />;
    case 'follower':
      return <FixedOneSideCharacterCard characterInfo={character} />;
    case 'test':
      return <CardWithHeader characterInfo={character} />;
  }
}

function FlippableCharacterCard({ characterInfo }: { characterInfo: Character }) {
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
            <p className='text-7xl font-extrabold text-text-main text-center'>
              {characterInfo.character}
            </p>
          </div>
          <div>
            <p className='text-ms font-medium text-text-main text-center'>
              {characterInfo.radical}
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
          <SoundList sounds={characterInfo.sounds} />
        </div>
      </div>
    </div>
  )
}

function FixedHoverableOneSideCharacterCard({ characterInfo }: { characterInfo: Character }) {
  return (
    <div className='flex flex-col gap-2 group hover:bg-primary p-1 bg-card rounded-lg min-h-40 border-2 border-orange-500 shadow-lg shadow-orange-500/50'>
      <div className='group group-hover:bg-primary rounded-lg bg-card flex-1 flex justify-between border-1 border-dashed border-gray-200 px-2'>
        <p className='text-xl font-bold text-text-main self-center'>
          {characterInfo.character}
        </p>
        <p className='text-ms font-medium text-text-main self-end'>
          {characterInfo.radical}
        </p>
      </div>
      <div
        className='group group-hover:bg-primary rounded-lg bg-card flex-9 border-1 border-dashed border-gray-200 pl-2 pt-2'
      >
        <SoundList sounds={characterInfo.sounds} />
      </div>
    </div>
  )
}

function FixedOneSideCharacterCard({ characterInfo, isLeader = false }: { characterInfo: Character, isLeader?: boolean }) {
  return (
    <div className={clsx('flex flex-row items-stretch gap-2 p-1 bg-card rounded-lg min-h-40 border-2 shadow-lg', {
      'border-orange-500 shadow-orange-500/50': isLeader,
      'border-sky-500 shadow-sky-500/50': !isLeader,
    })}>
      <div className={clsx(
        'flex flex-col justify-center self-start',
        'p-2 bg-card rounded-lg',
        'border-2 shadow-lg', {
        'border-orange-200': isLeader,
        'border-sky-200': !isLeader,
      }
      )}>
        <div>
          <p className='text-7xl font-extrabold text-text-main text-center'>
            {characterInfo.character}
          </p>
        </div>
        <div>
          <p className='text-ms font-medium text-text-main text-center'>
            {characterInfo.radical}
          </p>
        </div>
      </div>
      <div
        className='rounded-lg bg-card flex-9 border-1 border-dashed border-gray-200 pl-2 pt-2'
      >
        <SoundList sounds={characterInfo.sounds} />
      </div>
    </div>
  )
}

function CardWithHeader({ characterInfo, isLeader = false }: { characterInfo: Character, isLeader?: boolean }) {
  return (
    <></>
  )
}

function SoundList({ sounds }: { sounds: Sound[] }) {
  return (
    <div className="rounded-lg flex flex-col gap-2 text-ms font-normal text-text-main">
      {sounds.map(item => (
        <div key={item.sound} className="flex flex-row gap-3">
          <span className="shrink-0">({item.sound})</span>
          <span>{item.words.join('、')}</span>
        </div>
      ))}
    </div>
  );
}