import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginAdminComponent } from './components/Authentication/login admin/login-admin/login-admin.component';
import { LoginCustomerComponent } from './components/Authentication/login customer/login-customer/login-customer.component';
import { AdminHomeComponent } from './components/home/Admin-home/admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminContentComponent } from './components/home/admin-content/admin-content.component';
import { InputModalComponent } from './components/shared/input-modal/input-modal.component';
import { DataStorageService } from './Services/data-storage.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartService } from './Services/cart.service';
import { PaymentsComponent } from './components/payments/payments.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginAdminComponent,
    LoginCustomerComponent,
    AdminHomeComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    AdminContentComponent,
    InputModalComponent,
    ShoppingCartComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService, DataStorageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
