import { createReducer, on } from '@ngrx/store';
import { PeopleResults } from '../../models';
import { PeopleActions } from './actions';

export interface PeopleState {
  loadedPage: number;
  data: PeopleResults;
}

export const peopleReducer = createReducer(
  {} as PeopleState,
  on(PeopleActions.loaded, (state, { loadedPage, data }) => ({
    ...state,
    loadedPage,
    data,
  }))
);
