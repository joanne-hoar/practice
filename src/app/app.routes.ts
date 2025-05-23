import { Routes } from '@angular/router';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'products/:category', component: ProductsHomeComponent},
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent},
    { path: '**', component: HomeComponent}
];
