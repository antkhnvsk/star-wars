import { Routes } from '@angular/router';
import { PlanetComponent } from './planet.component';

export default [
  {
    path: ':planetId',
    component: PlanetComponent,
  },
] as Routes;
