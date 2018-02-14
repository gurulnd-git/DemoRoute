import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component'
import { ProductsComponent } from './products/products.component'
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
const routes : Routes = [
  {
    path : '',
    component : LayoutComponent,
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'details/:id',
    component : DetailsComponent
  },
  {
    path : 'checkout',
    component : CheckoutComponent
  },
  {
    path : 'login',
    component : LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class LayoutRoutingModule { }