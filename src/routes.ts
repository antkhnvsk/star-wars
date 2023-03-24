import { Routes } from '@angular/router';

export default [
  {
    path: 'people',
    loadChildren: () => import('./app/people-list/routes'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'people',
  },
] as Routes;
