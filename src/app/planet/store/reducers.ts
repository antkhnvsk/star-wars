import { createReducer, on } from '@ngrx/store';
import { PlanetResult } from 'src/app/models';
import { PlanetActions } from './actions';

export interface PlanetState {
  data?: PlanetResult;
  loadedPlanetId: number;
}

export const planetReducer = createReducer(
  {} as PlanetState,
  on(PlanetActions.loaded, (state, { loadedPlanetId, data }) => ({
    ...state,
    loadedPlanetId,
    data,
  }))
);
