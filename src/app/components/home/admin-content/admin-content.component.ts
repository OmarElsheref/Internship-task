import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../Services/translation.service';
import { DataStorageService } from '../../../Services/data-storage.service';

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrl: './admin-content.component.css'
})
export class AdminContentComponent {
  products: Product[] = [];
  displayedProducts: Product[] = [];

  isModalOpen = false;
  currentPage: number = 1;
  itemsPerPage: number = 5;

  isPriceAscending: boolean = true;
  isPriceSorted: boolean = false;

  isNameAscending: boolean = true;
  isNameSorted: boolean = false;

  Math = Math;

  constructor(public translationService : TranslationService, private dataStorageService: DataStorageService){}

  fetchProducts() {
    this.dataStorageService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedProducts = this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.products.length) {
      this.currentPage++;
      this.updateDisplayedProducts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedProducts();
    }
  }

  toggleSortPrice() {
    this.isPriceSorted = true;
    this.isPriceAscending = !this.isPriceAscending;
    this.products.sort((a, b) => this.isPriceAscending ? a.price - b.price : b.price - a.price);
    this.updateDisplayedProducts();
  }

  toggleSortName() {
    this.isNameSorted = true;
    this.isNameAscending = !this.isNameAscending;
    this.products.sort((a, b) =>
      this.isNameAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    this.updateDisplayedProducts();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit() {
  this.dataStorageService.getProducts().subscribe(products => {
    console.log("Fetched Products:", products);
    this.products = products;
    this.updateDisplayedProducts();
  }, error => {
    console.error("Error fetching products:", error);
  });
}
}
