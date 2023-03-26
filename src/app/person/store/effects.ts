import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import { SwapiService } from 'src/app/api';
import { PersonActions } from './actions';
import { loadedPersonIdSelector } from './selectors';

export const loadPeopleEffect = createEffect(
  (
    actions$ = inject(Actions),
    api = inject(SwapiService),
    store = inject(Store)
  ) =>
    actions$.pipe(
      ofType(PersonActions.load),
      concatLatestFrom(() => store.select(loadedPersonIdSelector)),
      filter(([{ personId }, loadedPersonId]) => personId !== loadedPersonId),
      exhaustMap(([{ personId }]) =>
        api.getPerson(personId).pipe(
          map((data) =>
            PersonActions.loaded({ data, loadedPersonId: personId })
          ),
          catchError(() => EMPTY)
        )
      )
    ),
  { functional: true }
);
