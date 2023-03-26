import { createReducer, on } from '@ngrx/store';
import { PersonResult } from 'src/app/models';
import { PersonActions } from './actions';

export interface PersonState {
  data?: PersonResult;
  loadedPersonId: number;
}

export const personReducer = createReducer(
  {} as PersonState,
  on(PersonActions.loaded, (state, { loadedPersonId, data }) => ({
    ...state,
    loadedPersonId,
    data,
  }))
);
