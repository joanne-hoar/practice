import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * HeaderComponent
 *
 * Displays the application header with navigation links and a heading.
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // The heading text to display in the header
  @Input() heading!: string;
}
