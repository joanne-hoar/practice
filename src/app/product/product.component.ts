import { Component, Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';

@Component({
  selector: 'app-product',
  imports: [AddToCartComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name!: string; // Product name
  @Input() image!: string; // Product image path
  @Input() description!: string; // Product description

  count = 0;
}
