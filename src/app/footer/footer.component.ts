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
  @Input() publisher = "Front End Framworks";
  @Input() year = "2025";

}
