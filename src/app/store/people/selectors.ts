import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouteParam } from '..';
import { PeopleState } from './reducers';

const peopleSelector = createFeatureSelector<PeopleState>('people');

const peopleDataSelector = createSelector(
  peopleSelector,
  (state) => state.data
);

export const loadedPageSelector = createSelector(
  peopleSelector,
  (state) => state.loadedPage
);

export const peoplePageSelector = createSelector(
  selectRouteParam('peoplePage'),
  (page) => (page !== undefined ? +page : undefined)
);

export const peopleViewSelector = createSelector(
  peoplePageSelector,
  loadedPageSelector,
  peopleDataSelector,
  (page, loadedPage, data) => (page == loadedPage ? { data, page } : null)
);
