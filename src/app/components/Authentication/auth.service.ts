import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from './user.model';
import { Router } from '@angular/router';


export interface AuthResponseData{
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registerd?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private router: Router) {}

  signup(email: string, password: string) {
    if (email === "omar@gmail.com" && password === "12345678") {
      const user = new User(email, "1", "dummy-token", new Date(new Date().getTime() + 3600 * 1000));
      this.user.next(user);
      localStorage.setItem("userData", JSON.stringify(user));
      this.autoLogout(3600 * 1000);
    } else {
      throw new Error("Signup failed. Invalid credentials.");
    }
  }
  login(email: string, password: string) {
    if (email === "omar@gmail.com" && password === "12345678") {
      const user = new User(email, "1", "dummy-token", new Date(new Date().getTime() + 3600 * 1000));
      this.user.next(user);
      localStorage.setItem("userData", JSON.stringify(user));
      this.autoLogout(3600 * 1000);
    } else {
      throw new Error("Invalid email or password!");
    }
  }
  logout() {
    this.user.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  autoLogin() {
    const userDataString = localStorage.getItem("userData");
    if (!userDataString) {
      return;
    }

    const userData: { email: string; id: string; _token: string; _tokenExpirationDate: string } =
      JSON.parse(userDataString);

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }
}
