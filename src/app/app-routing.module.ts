import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductsComponent } from './component/products/products.component';
const routes: Routes = [
  // {path:'products', },
  {path:"", component: ProductsComponent},
  {path:"cart", component: CartComponent},
  {path:"navbar", component: NavbarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ProductsComponent,CartComponent, NavbarComponent]
