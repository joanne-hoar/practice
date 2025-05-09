import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  image = "can-of-beans.jpg";
  name = "Can of Beans";
  description = "Full of magical moments, this can of beans could be yours!";
}
