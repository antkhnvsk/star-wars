import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, exhaustMap, filter, map } from 'rxjs';
import { SwapiService } from 'src/app/api';
import { PlanetActions } from './actions';
import { loadedPlanetIdSelector } from './selectors';

export const loadPlanetEffect = createEffect(
  (
    actions$ = inject(Actions),
    api = inject(SwapiService),
    store = inject(Store)
  ) =>
    actions$.pipe(
      ofType(PlanetActions.load),
      concatLatestFrom(() => store.select(loadedPlanetIdSelector)),
      filter(([{ planetId }, loadedPlanetId]) => planetId !== loadedPlanetId),
      exhaustMap(([{ planetId }]) =>
        api.getPlanet(planetId).pipe(
          map((data) =>
            PlanetActions.loaded({ data, loadedPlanetId: planetId })
          ),
          catchError(() => EMPTY)
        )
      )
    ),
  { functional: true }
);
