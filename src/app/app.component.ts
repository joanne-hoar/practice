import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Products App';
}
