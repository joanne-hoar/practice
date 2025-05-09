import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-products-home',
  imports: [ProductComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './products-home.component.html', 
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {
  products = [
  {
    "name": "Can of Beans",
    "image": "can-of-beans.jpg",
    "description": "Full of magical moments, this can of beans could be yours!"
  },
  {
    "name": "Bag of Crisps",
    "image": "bag-of-crisps.jpg",
    "description": "That should say chips. Any flavour you want."
  },
  {
    "name": "Gummy Bears",
    "image": "gummy-bears.jpg",
    "description": "Be sure to specify quantity as we have too many and will send you a lot."
  }
]
}
