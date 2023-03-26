import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, filter, map } from 'rxjs';
import { SwapiService } from 'src/app/api';
import { PeopleActions } from './actions';
import { loadedPageSelector } from './selectors';

export const loadPeopleEffet = createEffect(
  (
    actions$ = inject(Actions),
    api = inject(SwapiService),
    store = inject(Store)
  ) =>
    actions$.pipe(
      ofType(PeopleActions.load),
      concatLatestFrom(() => store.select(loadedPageSelector)),
      filter(([{ page }, loadedPage]) => page !== loadedPage),
      exhaustMap(([{ page }]) =>
        api.getPeople(page).pipe(
          map((data) => PeopleActions.loaded({ data, loadedPage: page })),
          catchError(() => EMPTY)
        )
      )
    ),
  { functional: true }
);
