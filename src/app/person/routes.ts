import { Routes } from '@angular/router';
import { PersonComponent } from './person.component';

export default [
  {
    path: ':personId',
    component: PersonComponent,
  },
  {
    path: ':personId/planet',
    loadChildren: () => import('../planet/routes'),
  },
] as Routes;
