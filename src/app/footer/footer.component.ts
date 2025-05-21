import { Component, Input } from '@angular/core';

/**
 * FooterComponent
 *
 * Displays the application footer with publisher and year information.
 */
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // The publisher name to display in the footer
  @Input() publisher = "Front End Framworks";
  // The year to display in the footer
  @Input() year = "2025";
}
