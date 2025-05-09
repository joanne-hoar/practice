import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-home',
  imports: [ProductComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './products-home.component.html', 
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent implements OnInit {
  products: any[] = [];
  category?: string | null;
  
  constructor(private route: ActivatedRoute) {}

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
}
