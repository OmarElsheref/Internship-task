import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../Services/data-storage.service';
import { CartService } from '../../Services/cart.service';
import { ShoppingCartService } from '../../Services/shopping-cart.service';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  displayedProducts: Product[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 0;
  cartCount = 0;


  constructor(private dataStorageService: DataStorageService, private cartService: CartService, private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.dataStorageService.getProducts().subscribe(products => {
      this.products = products;
      this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
      this.updateDisplayedProducts();
    }, error => {
      console.error("Error fetching products:", error);
    });

    this.shoppingCartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProducts();
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.shoppingCartService.addToCart(product);
    alert('product added successfully');
  }

}
