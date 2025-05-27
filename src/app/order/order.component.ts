import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductComponent } from '../product/product.component';
import { ProductDetails } from '../product.model';
import { CommonModule } from '@angular/common';
/**
 * OrderComponent
 *
 * Displays the order summary page.
 * Retrieves the order details from the route parameters and displays them to the user.
 */
@Component({
  selector: 'app-order',
  imports: [HeaderComponent, FooterComponent, ProductComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  // The order summary string, either passed as input or retrieved from route parameters
  order: { product: ProductDetails, count: number }[] = [];

  // Injects ActivatedRoute for accessing route parameters and Router for navigation
  constructor(private route: ActivatedRoute, private router: Router, private cart: CartService ) {}

  // OnInit lifecycle hook subscribes to route parameters and sets the order property
  ngOnInit(): void {      
        this.order = this.cart.items;      
    }
}
