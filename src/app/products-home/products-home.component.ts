import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products-home',
  imports: [ProductComponent, HeaderComponent, FooterComponent, CommonModule, HttpClientModule],
  templateUrl: './products-home.component.html', 
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/grocery.json').subscribe((data) => {
      this.products = data;
    });
  }
}
