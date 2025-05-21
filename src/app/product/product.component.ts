import { Component, Input } from '@angular/core';

/**
 * ProductComponent
 *
 * Displays a single product's details, including name, image, and description.
 * Allows the user to specify a quantity to add to the cart.
 */
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name!: string; // Product name received from parent component
  @Input() image!: string; // Product image path received from parent component
  @Input() description!: string;  // Product description received from parent component
}
