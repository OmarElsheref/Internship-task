import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private firebaseUrl = 'https://intership-task-project-default-rtdb.firebaseio.com/products.json';

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any[]> {
    return this.http.get<{ [key: string]: any }>(this.firebaseUrl).pipe(
      map(response => {
        if (!response) return [];
        return Object.keys(response).map(key => ({
          id: key,
          ...response[key]
        }));
      })
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.firebaseUrl, product);
  }
  

}
