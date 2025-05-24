import { CommonModule } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductDetails } from '../product.model';

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
  products: ProductDetails[] = [];
  // The current category from the route parameter
  category?: string | null;
  // QueryList of child ProductComponent instances
  @ViewChildren(ProductComponent) productComponents!: QueryList<ProductComponent>;

  // Injects ActivatedRoute for accessing route parameters and Router for navigation
  constructor(private route: ActivatedRoute, private router: Router  ) {}

  // OnInit lifecycle hook subscribes to route parameters and loads products for the selected category
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.category = params.get('id');
        if (this.category) {
          this.fetchProducts(this.category);
        }
      });    
  }

  // Fetches products from the given JSON URL and assigns them to the products array
  fetchProducts(category: string): void {
    fetch('assets/products.json')
      .then(response => response.json())
      .then((data: ProductDetails[]) => {
        this.products = data.filter(product => product.category === category);
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }

  // Gathers the selected products and navigates to the order page with the order summary
  sendOrder(): void {
    let message = "";
    this.productComponents.forEach(product => {
     if(product.count > 0)
        message += product.count + ' ' + product.details.name + ', ';
    });

    this.router.navigate(['/order', {order: message}]);
  }
}
