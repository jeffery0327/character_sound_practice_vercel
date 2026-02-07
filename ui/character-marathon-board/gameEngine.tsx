import { CompletedCharacter, Sound } from '@/lib/db';
import { GameState } from '@/ui/character-marathon-board/types'

export function createQuestion(
  characters: CompletedCharacter[],
  sounds: Sound[],
) {

  const question = pickQuestion(characters);

  const correct = pickSound(
    sounds.filter(s => question.sounds.some(qs => qs.id === s.id)),
  );

  const wrong = pickManySounds(
    sounds.filter(s => !question.sounds.some(qs => qs.id === s.id)),
    2
  );

  return {
    question: question,
    answerSound: correct,
    options: shuffle([correct, ...wrong]),
  };
}

function pickQuestion(source: CompletedCharacter[]): CompletedCharacter {
  return source[Math.floor(Math.random() * source.length)];
}

function pickSound(source: Sound[]): Sound {
  return source[Math.floor(Math.random() * source.length)];
}

function pickManySounds(source: Sound[], picktimes: number): Sound[] {
  return shuffle(source).slice(0, picktimes);
}

function shuffle(source: Sound[]): Sound[] {
  let result = [...source];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = result[i]
    result[i] = result[j]
    result[j] = t
  }
  return result
}

export function getOptionType(state: GameState, sound: Sound) {
  if (state.result === null) return null;
  if (state.answerSound.id === sound.id) return 'correct';
  if (state.selectedSound?.id === sound.id) return 'wrong';
  return 'notChoose';
}

export function createInitialState(characters: CompletedCharacter[], sounds: Sound[]): GameState {
  return {
    ...createQuestion(characters, sounds),
    selectedSound: null,
    result: null,
  }
}