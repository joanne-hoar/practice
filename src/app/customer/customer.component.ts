import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  // Form fields
  name = '';
  email = '';
  phone = '';
  address = '';
  city = '';
  postcode = '';

  emailError = '';

  constructor(private cart: CartService, private router: Router ) {}

  validateEmail(email: string): boolean {
    // Simple email regex for validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onEmailChange(value: string) {
    this.email = value;
    if (!this.validateEmail(this.email) && this.email.length > 0) {
      this.emailError = 'Please enter a valid email address.';
    } else {
      this.emailError = '';
    }
  }

  onSubmit() {
    // Email validation
    if (!this.validateEmail(this.email)) {
      this.emailError = 'Please enter a valid email address.';
      return;
    } else {
      this.emailError = '';
    }

    // Gather customer details
    const customerDetails = {
      name: this.name,
      email: this.email,
      address: this.address,
    };

    // Get order details from cart
    const orderItems = this.cart.getItems();
    const total = orderItems.reduce((sum, item) => sum + (item.count || 0), 0);

    // Combine into one object
    const data = {
      customer: customerDetails,
      order: orderItems,
      totalItems: total
    };

    // Create and trigger download
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'order-details.json';
    a.click();
    window.URL.revokeObjectURL(url);

    // redirect to home page
    this.router.navigate(['/home']);
  }
}
