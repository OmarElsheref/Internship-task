import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LoginAdminComponent } from './components/Authentication/login admin/login-admin/login-admin.component';
import { LoginCustomerComponent } from './components/Authentication/login customer/login-customer/login-customer.component';
import { AdminHomeComponent } from './components/home/Admin-home/admin-home/admin-home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-login', component: LoginAdminComponent },
  { path: 'customer-login', component: LoginCustomerComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'customer-home', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
