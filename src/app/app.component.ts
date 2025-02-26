import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Internship-task';

  showHeader: boolean = true;

  constructor(private router: Router, private spinner: NgxSpinnerService) {

     this.router.events.subscribe(() => {
      const hiddenRoutes = ['/admin-login', '/admin-home']; 
      this.showHeader = !hiddenRoutes.includes(this.router.url);
    });
  }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
