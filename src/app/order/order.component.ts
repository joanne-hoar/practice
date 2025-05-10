import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit {
  @Input() order!: string | null;

  constructor(private route: ActivatedRoute, private router: Router  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.order = params.get('order');
      })
    }
}
