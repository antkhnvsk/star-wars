import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list.component';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1',
  },
  {
    path: ':peoplePage',
    component: PeopleListComponent,
  },
  {
    path: ':peoplePage/person',
    loadChildren: () => import('../person/routes'),
  },
] as Routes;
