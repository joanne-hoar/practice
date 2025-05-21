import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Defines the application's configuration, including zone change detection and router providers
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Enables event coalescing for zone change detection
    provideRouter(routes) // Provides the application's routes
  ]
};
