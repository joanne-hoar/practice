import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name!: string; // Product name
  @Input() image!: string; // Product image path
  @Input() description!: string; // Product description
}
