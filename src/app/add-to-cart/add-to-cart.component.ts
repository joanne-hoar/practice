import { Component, model, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * AddToCartComponent
 *
 * Provides a form for the user to select a quantity and add a product to the cart.
 * Uses Angular's model for two-way binding of the quantity value.
 */
@Component({
  selector: 'app-add-to-cart',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  @Output() addToCart = new EventEmitter();
  @Output() removeFromCart = new EventEmitter();

  // Holds the quantity of the product to add to cart, initialized to 0
  quantity = model<number>(0);
  carttotal = model<number>(0);

  onAddToCart() {
    this.addToCart.emit();
  }

  onRemoveFromCart() {
    this.removeFromCart.emit();
  }
}
