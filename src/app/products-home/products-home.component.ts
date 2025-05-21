import { CommonModule } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

interface Product {
  // matches expected json file
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products-home',
  imports: [ProductComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './products-home.component.html', 
  styleUrl: './products-home.component.css'
})

export class ProductsHomeComponent implements OnInit {
  products: Product[] = [];
  category?: string | null;
  @ViewChildren(ProductComponent) productComponents!: QueryList<ProductComponent>;

  constructor(private route: ActivatedRoute, private router: Router  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.category = params.get('id');
        if (this.category) {
          this.fetchProducts('assets/' + this.category + '.json');
        }
      });    
  }

  fetchProducts(url: string): void {
      fetch(url)
      .then(response => response.json()) // Parse JSON
      .then(data => this.products = data) // Work with JSON data
      .catch(error => console.error('Error fetching JSON:', error));
  }

  sendOrder(): void {
    let message = "";
    this.productComponents.forEach(product => {
     if(product.count > 0)
        message += product.count + ' ' + product.name + ', ';
    });

    this.router.navigate(['/order', {order: message}]);
  }
}
