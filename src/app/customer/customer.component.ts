import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotOnlyWhitespaceValidatorDirective } from './validators/not-only-whitespace.directive';
import { EmailPatternValidatorDirective } from './validators/email-pattern.directive';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule, CommonModule, NotOnlyWhitespaceValidatorDirective, EmailPatternValidatorDirective],
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
  nameError = '';
  addressError = '';

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

  onNameChange(value: string) {
    this.name = value;
    this.nameError = this.name.trim().length === 0 ? 'Name is required.' : '';
  }

  onAddressChange(value: string) {
    this.address = value;
    this.addressError = this.address.trim().length === 0 ? 'Address is required.' : '';
  }

  onSubmit() {
    // Validate name and address
    this.nameError = this.name.trim().length === 0 ? 'Name is required.' : '';
    this.addressError = this.address.trim().length === 0 ? 'Address is required.' : '';

    // Email validation
    if (!this.validateEmail(this.email)) {
      this.emailError = 'Please enter a valid email address.';
    } else {
      this.emailError = '';
    }

    // If any errors, do not proceed
    if (this.nameError || this.addressError || this.emailError) {
      return;
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
