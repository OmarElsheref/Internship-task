import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../Authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private userSub!: Subscription
  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onLogout(){
    this.authService.logout();

  }

  onSaveData(){
  }

  onFetchData(){
  }

  ngOnDestroy(): void {
  this.userSub.unsubscribe();
  }
}
