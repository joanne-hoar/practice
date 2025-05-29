import { Component, Input, OnInit } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { ProductDetails } from '../product.model';
import { CartService } from '../cart.service';

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
export class ProductComponent  implements OnInit {
  // Product received from parent component
  @Input() details!: ProductDetails;

  // Number of this product on order
  count = 1;
  total = 0;

  constructor(private cart: CartService){}
 
  ngOnInit(): void {
    // Initialize count to the number of items of this product in the cart
    this.total = this.cart.getCountForProduct(this.details.name);
  }

  onAddToCart(): void {
    if (this.count > 0) {
      this.cart.addToCart(this.details, this.count);
      this.total = this.cart.getCountForProduct(this.details.name);
    }
  }

  onRemoveFromCart(): void {
    if (this.total > 0) {
      this.cart.removeFromCart(this.details, this.count);
      this.total = this.cart.getCountForProduct(this.details.name);
    }
  }
}