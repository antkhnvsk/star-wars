import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { peopleReducer, PeopleEffects } from './app/people-list/';
import ROUTES from './main.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(ROUTES),
    provideHttpClient(),
    provideStore(),
    provideState('people', peopleReducer),
    provideState('router', routerReducer),
    provideRouterStore(),
    provideEffects(PeopleEffects),
  ],
});
