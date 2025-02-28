import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrl: './login-customer.component.css'
})
export class LoginCustomerComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService){}

  onLogin(event: Event) {
    event.preventDefault();

    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/customer-home']);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }

}

