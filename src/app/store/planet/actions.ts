import { createActionGroup, props } from '@ngrx/store';
import { PlanetResult } from 'src/app/models';

export const PlanetActions = createActionGroup({
  source: 'Planet',
  events: {
    Load: props<{ planetId: number }>(),
    Loaded: props<{ data: PlanetResult; loadedPlanetId: number }>(),
  },
});
