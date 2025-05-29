import { Injectable } from '@angular/core';
import { ProductDetails } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: { product: ProductDetails, count: number }[] = [];
 
  addToCart(details: ProductDetails, count = 1) {
    const index = this.items.findIndex(item => item.product.name === details.name);
    if (index > -1) {
      this.items[index].count += count;
    } else {
      this.items.push({ product: details, count });
    }
  }

  removeFromCart(details: ProductDetails) {
    const index = this.items.findIndex(item => item.product.name === details.name);
    if (index > -1) {
        this.items.splice(index, 1);      
    }
  }

  getItems() {
    return this.items;
  }
  
  getCountForProduct(name: string): number {
    const item = this.items.find(item => item.product.name === name);
    return item ? item.count : 0;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
