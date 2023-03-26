import { createActionGroup, props } from '@ngrx/store';
import { PersonResult } from 'src/app/models';

export const PersonActions = createActionGroup({
  source: 'Person',
  events: {
    Load: props<{ personId: number }>(),
    Loaded: props<{ data: PersonResult; loadedPersonId: number }>(),
  },
});
