import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from './user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === 'omar@gmail.com' && password === '12345678') {
      this.isAuthenticated.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.next(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['']);
  }

  isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }

  checkLoginStatus() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isAuthenticated.next(loggedIn);
  }

}
