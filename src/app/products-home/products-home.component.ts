import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { OnInit } from '@angular/core';

interface Product {
  // matches expected json file
  name: string;
  image: string;
  description: string;
  category: string;
}

/**
 * ProductsHomeComponent
 *
 * Displays a list of products based on the selected category.
 * Fetches product data from a JSON file, renders each product using ProductComponent,
 * and allows users to submit their order. Handles navigation and route parameters.
 */
@Component({
  selector: 'app-products-home',
  imports: [ProductComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './products-home.component.html', 
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent implements OnInit {
  // Array of products loaded from the JSON file
  products: Product[] = [];

  ngOnInit(): void {
    fetch('assets/products.json')
      .then(response => response.json())
      .then((data: Product[]) => {
        this.products = data;
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }
}
