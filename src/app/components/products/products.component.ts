import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  displayedColumns: string[] = [
    '_id',
    'image',
    'name',
    'quantity',
    'price',
    'discount',
    'category',
    'tag',
    'featured',
    'firstDate',
    'updateDate',
  ];
  products: any[] = [];

  currentRoutePath: string = '';

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

 //routing
 navigateToProduct(productId: string) {
  this.router.navigate(['/products', productId]);
}

Filterchange(event: Event) {

  const value = (event.target as HTMLInputElement).value;
  this.dataSource.filter = value.trim().toLowerCase();

}

public  formatReadableDate(dateString:any) {

  const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };

  const date = new Date(dateString);

  return date.toLocaleString('en-US', options);

}
compareDates(updatedDate: Date, firstDate: Date): string {

  return updatedDate === firstDate ? 'text-black' : 'font-medium text-green-600';

}

//price formatteur
public formatPrice(price:any) {
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



ngOnInit(): void {
  this.route.url.subscribe((urlSegments) => {

    const path = urlSegments.map((segment) => segment.path).join('/');
    this.currentRoutePath = path;

  });
}

}
