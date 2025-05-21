import { Component, Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

/**
 * ProductComponent
 *
 * Displays a single product's details, including name, image, and description.
 * Allows the user to specify a quantity to add to the cart.
 */
@Component({
  selector: 'app-product',
  imports: [AddToCartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // Product name received from parent component
  @Input() name!: string;
  // Product image path received from parent component
  @Input() image!: string;
  // Product description received from parent component
  @Input() description!: string;

  // Number of this product on order
  count = 0;
}
