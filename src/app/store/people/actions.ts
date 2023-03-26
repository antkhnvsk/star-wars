import { createActionGroup, props } from '@ngrx/store';
import { PeopleResults } from '../../models';

export const PeopleActions = createActionGroup({
  source: 'People',
  events: {
    Load: props<{ page: number }>(),
    Loaded: props<{ data: PeopleResults; loadedPage: number }>(),
  },
});
