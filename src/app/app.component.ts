import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * AppComponent
 *
 * The root component of the application.
 * Sets up the main template and includes the router outlet for displaying routed views.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // The title of the application
  title = 'Products App';
}
