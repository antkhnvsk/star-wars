import { createSelector } from '@ngrx/store';
import { selectRouteParam } from '../router.selectors';

export const breadCrumbsSelector = createSelector(
  selectRouteParam('peoplePage'),
  selectRouteParam('personId'),
  selectRouteParam('planetId'),
  (peoplePage, personId, planetId) => {
    let breadcrumbs: { link?: string; text: string }[] = [];
    if (peoplePage === undefined) {
      return breadcrumbs;
    }

    breadcrumbs = [
      ...breadcrumbs,
      { text: 'People', link: `/people/${peoplePage}` },
    ];

    if (personId === undefined) {
      return breadcrumbs;
    }

    breadcrumbs = [
      ...breadcrumbs,
      { text: 'Person', link: `/people/${peoplePage}/person/${personId}` },
    ];

    if (planetId === undefined) {
      return breadcrumbs;
    }

    breadcrumbs = [
      ...breadcrumbs,
      {
        text: 'Planet',
        link: `/people/${peoplePage}/person/${personId}/planet/${planetId}`,
      },
    ];

    return breadcrumbs;
  }
);
