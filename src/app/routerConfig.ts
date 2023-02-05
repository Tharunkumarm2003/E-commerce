import { Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';

const appRoutes: Routes = [
  { path: 'products', 
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  { path: 'header',
    component: HeaderComponent
  }
];
export default appRoutes;