import { Component, Input } from '@angular/core';

/**
 * HeaderComponent
 *
 * Displays the application header with navigation links and a heading.
 */
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() heading!: string;
}
