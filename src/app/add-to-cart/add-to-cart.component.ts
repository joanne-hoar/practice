import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart',
  imports: [FormsModule],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  quantity = model<number>(0);
}
