import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { ProductDetails } from './product.model';

describe('CartService', () => {
  let service: CartService;
  const product: ProductDetails = {
    name: 'Test Product',
    image: 'test.jpg',
    description: 'A test product',
    category: 'test'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    service.clearCart();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    service.addToCart(product, 2);
    expect(service.getItems().length).toBe(1);
    expect(service.getItems()[0].count).toBe(2);
  });

  it('should increase count if adding the same product', () => {
    service.addToCart(product, 1);
    service.addToCart(product, 3);
    expect(service.getItems().length).toBe(1);
    expect(service.getItems()[0].count).toBe(4);
  });

  it('should remove a product from the cart', () => {
    service.addToCart(product, 2);
    service.removeFromCart(product, 1);
    expect(service.getItems()[0].count).toBe(1);
    service.removeFromCart(product, 1);
    expect(service.getItems().length).toBe(0);
  });

  it('should not go below zero when removing', () => {
    service.addToCart(product, 1);
    service.removeFromCart(product, 2);
    expect(service.getItems().length).toBe(0);
  });

  it('should return correct count for a product', () => {
    service.addToCart(product, 5);
    expect(service.getCountForProduct(product.name)).toBe(5);
    service.removeFromCart(product, 2);
    expect(service.getCountForProduct(product.name)).toBe(3);
  });

  it('should clear the cart', () => {
    service.addToCart(product, 2);
    service.clearCart();
    expect(service.getItems().length).toBe(0);
  });
});
