import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// add this to see a lint error
// const pi = 3.14

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
