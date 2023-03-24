import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import ROUTES from './routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES), provideHttpClient()],
});
