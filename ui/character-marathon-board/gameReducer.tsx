import { Action, GameState } from '@/ui/character-marathon-board/types'

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'QUESTION_GENERATED':
      return {
        ...state,
        ...action.payload,
        selectedSound: null,
        result: null,
      };
    case 'SOUND_SELECTED':
      if (!state.answerSound || state.selectedSound) return state;

      const result = state.answerSound.id === action.selectedSound.id ? 
        'correct' : 'wrong';

      return {
        ...state,
        selectedSound: action.selectedSound,
        result: result,
      };
    default:
      return state;
  }
}
