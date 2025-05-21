import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

/**
 * OrderComponent
 *
 * Displays the order summary page.
 * Retrieves the order details from the route parameters and displays them to the user.
 */
@Component({
  selector: 'app-order',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  // The order summary string, either passed as input or retrieved from route parameters
  @Input() order!: string | null;

  // Injects ActivatedRoute for accessing route parameters and Router for navigation
  constructor(private route: ActivatedRoute, private router: Router  ) {}

  // OnInit lifecycle hook subscribes to route parameters and sets the order property
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.order = params.get('order');
      })
    }
}
