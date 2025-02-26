import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponseData, AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrl: './login-customer.component.css'
})
export class LoginCustomerComponent {

  isLoginMode = true;
  isLoading = false;
  error: string|null = null;

  constructor(private authService: AuthService, private router: Router){}

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    //console.log(form.value);
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<void>;

    this.isLoading = true;

    authObs = new Observable<void>((observer) => {
      try {
        if (this.isLoginMode) {
          this.authService.login(email, password);
        } else {
          this.authService.signup(email, password);
        }
        observer.next();
        observer.complete();
      } catch (error: any) {
        observer.error(error instanceof Error ? error.message : 'An error occurred');
      }
    });

    authObs.subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(['/admin-home']); 
      },
      (errorMessage) => {
        alert('Invalid email or password. Please try again.');
        this.isLoading = false;
      }
    );

    form.reset();
  }
}

