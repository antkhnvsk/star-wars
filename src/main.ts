import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import {
  PeopleEffects,
  peopleReducer,
  PersonEffects,
  personReducer,
  PlanetEffects,
  planetReducer,
} from './app/store';
import ROUTES from './main.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    provideHttpClient(),
    provideStore(),
    provideState('router', routerReducer),
    provideState('people', peopleReducer),
    provideState('person', personReducer),
    provideState('planet', planetReducer),
    provideRouterStore(),
    provideEffects(PeopleEffects),
    provideEffects(PersonEffects),
    provideEffects(PlanetEffects),
  ],
});
