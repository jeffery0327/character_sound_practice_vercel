import clsx from "clsx";
import { Score } from "./character-marathon-board/types";

export function GameBoard({
  title,
  scores,
  header,
  main,
  footer,
  options,
}: {
  title: string;
  scores: Score[];
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
  options: React.ReactNode[];
}) {


  return (
    <div className='grid grid-cols-1 rounded-xl p-1 bg-lime-500'>
      <div className='row-span-1 col-span-full rounded-xl p-1 bg-lime-950 text-black flex items-center justify-center text-white'>{title}</div>
      <div className='row-span-19 grid grid-cols-4 gap-1 rounded-xl p-1 bg-lime-500'>
        <div
          className={clsx(
            'col-span-1 grid-rows-11',
            'grid grid-flow-col gap-2',
            'rounded-xl p-1 bg-stone-400 border-2 border-yellow-300',
            'sr-only lg:not-sr-only'
          )}
        >
          <div className='col-span-1 rounded-xl p-1 bg-yellow-300 text-black flex items-center justify-center'>得分</div>
            {scores.map(renderScore)}
        </div>
        <div
          className={clsx(
            'col-span-4 grid-rows-1',
            'grid grid-flow-col gap-2',
            'rounded-xl p-1 bg-stone-400 border-2 border-yellow-300',
            'not-sr-only lg:sr-only'
          )}
        >
          <div className='col-span-1 rounded-xl p-1 bg-yellow-300 text-black flex items-center justify-center'>得分</div>
          {scores.slice(0,3).map(renderScore)}
        </div>
        <div className='lg:col-span-3 col-span-4 grid grid-cols-6 gap-1 rounded-xl p-1 bg-card border-2 border-yellow-300'>
          <div className='col-span-6 row-span-1 rounded-xl p-1 text-black flex items-center justify-center'>{header}</div>
          <div
            className='col-span-6 row-span-6 rounded-xl p-1 text-black flex items-center justify-center'
          >
            {main}
          </div>
          <div
            className='col-span-6 row-span-1 rounded-xl p-1 text-black flex items-center justify-center'
          >
            {footer}
          </div>
          {options.map((option, index) => (
            <div
              key={index}
              className='col-span-2 row-span-2 rounded-xl p-1 text-black flex items-center justify-center'
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const renderScore = (score: Score, index: number) => {
  const rankName = [
    '第一名', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'
  ]

  return (
    <div
      key={index}
      className={clsx(
        'grid grid-rows-3 md:grid-flow-col md:grid-rows-1 rounded-xl p-1 bg-blue-300 text-text-main font-bold', 
        'flex items-center justify-center'
      )}
    >
      <p>{rankName[score.rank - 1]} :</p>
      <p>{score.name} </p>
      <p>{score.score}分</p>
    </div>
  );
}