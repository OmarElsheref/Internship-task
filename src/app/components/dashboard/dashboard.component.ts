import { Component } from '@angular/core';
import { TranslationService } from '../../Services/translation.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    products: any[] = [];
    showPopup: boolean = false;
    newProduct = { name: '', description: '', price: 0, image: '' };

  public links: any = [
    {
      title: 'Dashboard',
      items: [
        {
          name: 'Products',
          icon: 'fa-solid fa-house',
          route: '/products'
        }, {
          name: 'Settings',
          icon: 'fa-brands fa-bandcamp',
          route: '/settings'
        }
        // ,{
        //   name: 'website',
        //   icon: 'fa-solid fa-eye',
        // },
      ],
    },

  ];

  //date formateur
  public formatReadableDate(dateString: any) {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

    const date = new Date(dateString);

    return date.toLocaleString('en-US', options);
  }


  //price formatteur
  public formatPrice(price: any) {
    if (typeof price === 'string') {

      if (price.includes('$')) {

        return price.replace('$', '') + '$';
      } else {

        return price + '$';
      }
    } else if (typeof price === 'number') {

      return price.toString() + '$';
    } else {

      return 'N/A';
    }
  }


  // [routerLink]="['/', item.name]
  public currentPath: string | undefined;

  public navigateTo(item: string) {

    this.router.navigate(['/', item]);

  }

  constructor(
    private router: Router,
    public translationService: TranslationService
  ) {
    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.currentPath = event.url.slice(1);

      }
    });
  }

  public sidebarisOpen: boolean = true;

  public toggleSideBar() {

    this.sidebarisOpen = false;
    console.log(this.sidebarisOpen);

  }
}
