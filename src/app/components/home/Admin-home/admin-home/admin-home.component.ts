import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../../Services/translation.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  searchName: string = '';
searchPrice: number | null = null;
searchRating: number | null = null;
currentPage: number = 1;
itemsPerPage: number = 10;
  products: any[] = [];
  showPopup: boolean = false;
  newProduct = { name: '', description: '', price: 0, image: '' };

  constructor(public translationService: TranslationService) {}

  get filteredProducts() {
    return this.products.filter(product =>
      (!this.searchName || product.name.toLowerCase().includes(this.searchName.toLowerCase())) &&
      (!this.searchPrice || product.price <= this.searchPrice) &&
      (!this.searchRating || product.rating >= this.searchRating)
    );
  }

  paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  applyFilters() {
    this.currentPage = 1;
  }
  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.description && this.newProduct.price && this.newProduct.image) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', description: '', price: 0, image: '' };
      this.showPopup = false;
    }
}
}
