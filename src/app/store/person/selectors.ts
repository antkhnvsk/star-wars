import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParam } from 'src/app/store';
import { PersonState } from './reducers';

const personSelector = createFeatureSelector<PersonState>('person');

const personDataSelector = createSelector(
  personSelector,
  (state) => state.data
);

export const loadedPersonIdSelector = createSelector(
  personSelector,
  (state) => state.loadedPersonId
);

export const personIdSelector = createSelector(
  selectRouteParam('personId'),
  (personId) => (personId !== undefined ? +personId : undefined)
);

export const personViewSelector = createSelector(
  personIdSelector,
  loadedPersonIdSelector,
  personDataSelector,
  (personId, loadedPersonId, result) =>
    personId == loadedPersonId ? result?.result : null
);
