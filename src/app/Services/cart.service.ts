import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

   addToCart(product: Product) {
    this.cart.push(product);
    this.cartSubject.next(this.cart);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
