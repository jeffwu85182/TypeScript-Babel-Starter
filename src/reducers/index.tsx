import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export function enthusiasm(
  state: StoreState = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
    name: 'jeff',
    items: [1, 2, 3, 4, 5]
  },
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
    default:
      return state;
  }
}
