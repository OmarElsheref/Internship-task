import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(event: Event)
  {
    event.preventDefault();

    if (this.email === 'omar@gmail.com' && this.password === '12345678') {
      this.router.navigate(['/admin-home']);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
