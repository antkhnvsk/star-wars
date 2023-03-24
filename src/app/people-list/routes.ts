import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1',
  },
  {
    path: ':page',
    component: PeopleListComponent,
  },
  {
    path: ':page/person',
    loadChildren: () => import('../person/routes'),
  },
] as Routes;
