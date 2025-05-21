import { Routes } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

// Defines the application's route configuration
export const routes: Routes = [
  // Route for viewing products by category id
  { path: 'products/:id', component: ProductsHomeComponent },
  // Route for the home page
  { path: 'home', component: HomeComponent },
  // Route for the order summary page
  { path: 'order', component: OrderComponent }
];