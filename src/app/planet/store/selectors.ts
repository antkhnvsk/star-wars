import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParam } from 'src/app/store';
import { PlanetState } from './reducers';

const planetSelector = createFeatureSelector<PlanetState>('planet');

const planetDataSelector = createSelector(
  planetSelector,
  (state) => state.data
);

export const loadedPlanetIdSelector = createSelector(
  planetSelector,
  (state) => state.loadedPlanetId
);

export const planetIdSelector = createSelector(
  selectRouteParam('planetId'),
  (planetId) => (planetId !== undefined ? +planetId : undefined)
);

export const planetViewSelector = createSelector(
  planetIdSelector,
  loadedPlanetIdSelector,
  planetDataSelector,
  (planetId, loadedPlanetId, result) =>
    planetId == loadedPlanetId ? result?.result : null
);
