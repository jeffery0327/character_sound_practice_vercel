import { CompletedCharacter, Sound } from "@/lib/db";

export type GameState = {
  question: CompletedCharacter;
  answerSound: Sound;
  options: Sound[];
  selectedSound: Sound | null;
  result: GameResult;
}

export type GameResult = 'correct' | 'wrong' | null;

export type Action =
  | { type: 'QUESTION_GENERATED', payload: { question: CompletedCharacter, answerSound: Sound, options: Sound[] } }
  | { type: 'SOUND_SELECTED', selectedSound: Sound}

export type Score = {
  rank: number;
  name: string;
  score: number;
}