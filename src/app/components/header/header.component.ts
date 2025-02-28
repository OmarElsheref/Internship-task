import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../Authentication/auth.service';
import { ShoppingCartService } from '../../Services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private userSub!: Subscription
  isAuthenticated = false;
  isLoggedIn = false;

  cartCount = 0;

  constructor(private authService: AuthService,private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
    this.authService.checkLoginStatus();
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
    this.shoppingCartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]).then(() => {
      window.location.reload();
    });
  }

  onSaveData(){
  }

  onFetchData(){
  }

  ngOnDestroy(): void {
  this.userSub.unsubscribe();
  }
}
