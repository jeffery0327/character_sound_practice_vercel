'use client';

import { MouseEventHandler, useEffect, useMemo, useReducer, useState } from 'react';
import clsx from 'clsx';
import { CompletedCharacter, Sound } from '@/lib/db';
import { gameReducer } from '@/ui/character-marathon-board/gameReducer';
import { GameResult, Score } from '@/ui/character-marathon-board/types'
import { createInitialState, createQuestion, getOptionType } from './gameEngine';
import { GameBoard } from '../game-board';

export function CharacterMarathonBoard({
  characters,
  sounds,
}: {
  characters: CompletedCharacter[];
  sounds: Sound[],
}) {
  const [state, dispatch] = useReducer(
    gameReducer,
    createInitialState(characters, sounds),
  );

  const scores = useMemo(() => {
    const mockScores = [
      { rank: 1, name: 'dada', score: 200 },
      { rank: 2, name: 'jeffery', score: 190 },
      { rank: 3, name: 'amy', score: 180 },
      { rank: 4, name: 'john', score: 170 },
      { rank: 5, name: 'apple', score: 160 },
      { rank: 6, name: 'stevin', score: 150 },
      { rank: 7, name: 'stevin', score: 150 },
      { rank: 8, name: 'stevin', score: 150 },
      { rank: 9, name: 'stevin', score: 150 },
      { rank: 10, name: 'stevin', score: 150 },
      { rank: 11, name: 'stevin', score: 150 },
      { rank: 12, name: 'stevin', score: 150 },
      { rank: 13, name: 'stevin', score: 150 },
      { rank: 14, name: 'stevin', score: 150 },
      { rank: 15, name: 'stevin', score: 150 },
      { rank: 16, name: 'stevin', score: 150 },
    ];
    return mockScores.filter(s => s.rank <= 10).sort((a, b) => a.rank - b.rank);
  }, [])

  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    if (state.result === null) return;
    const newScore = state.result === 'correct' ? score + 10 : score === 0 ? 0 : score - 10;
    setScore(newScore);
  }, [state.result])

  return (
    <GameBoard
      title='生字馬拉松'
      scores={scores}
      header={'分數資訊: ' + score}
      main={
        <QuestionCard 
          key={state.question.id} 
          characterInfo={state.question} 
          gameResult={state.result} 
        />
      }
      footer={
        <div
          className={clsx(
            'w-full h-full', 
            'rounded-lg p-3',
            'text-2xl',
            'flex flex-col items-center justify-center', {
            'border-2 border-gray-800': state.result !== null,
            'text-text-main': state.result === null,
            'text-white bg-red-500 hover:bg-red-400': state.result === 'wrong',
            'text-white bg-green-500 hover:bg-green-400': state.result === 'correct',
          }
          )}
          onClick={() => state.result && dispatch({ type: 'QUESTION_GENERATED', payload: createInitialState(characters, sounds) })}
        >
          <div>
            {!state.result ? '請點選對應的注音' : state.result === 'correct' ? '回答正確' : '回答錯誤'}
          </div>
          <div>
            {!state.result ? '' : '點選進入下一題...'}
          </div>
        </div>
      }
      options={state.options.map((sound) => (
        <SoundCard
          key={sound.id}
          soundInfo={sound}
          onClick={
            () => dispatch({ type: 'SOUND_SELECTED', selectedSound: sound })
          }
          type={getOptionType(state, sound)}
        />
      )
      )}
    />
  )
}

function QuestionCard({ characterInfo, gameResult }: { characterInfo: CompletedCharacter | null, gameResult: GameResult }) {
  return (
    <div className={clsx(
      'w-full h-full',
      'p-3 rounded-lg',
      'bg-card',
      'border-2 border-orange-500',
      'shadow-lg shadow-orange-500/50',
      'flex flex-col gap-3 items-center justify-center'
    )}>
      <p className='text-7xl font-extrabold text-text-main'>
        {characterInfo?.character}
      </p>
      {gameResult !== null ? characterInfo?.sounds.map((sound) => (
        <p key={sound.id}>{sound.sound + ': ' + sound.words} </p>
      )) : undefined}
    </div>
  )
}

function SoundCard({
  soundInfo,
  onClick,
  type,
}: {
  soundInfo: Sound,
  onClick: MouseEventHandler<HTMLDivElement>,
  type: 'correct' | 'wrong' | 'notChoose' | null
}) {
  return (
    <div
      onClick={type === null ? onClick : undefined}
      className={clsx(
        'w-full h-full',
        'p-2 bg-card rounded-lg',
        'flex items-center justify-center',
        'border-2 border-orange-500',
        'shadow-lg shadow-orange-500/50', {
        'hover:bg-primary': type === null,
        'bg-card': type === null || type === 'notChoose',
        'bg-red-500': type === 'wrong',
        'bg-green-500': type === 'correct',
      })}
    >
      <div className=''>
        <p className={clsx(
          'text-xl font-extrabold text-center', {
          'text-text-main': type === null || type === 'notChoose',
          'text-white': type === 'correct' || type === 'wrong',
        }
        )}>
          {soundInfo.sound}
        </p>
      </div>
    </div>
  )
}
