import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../../../Services/translation.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  products: any[] = [];
  showPopup: boolean = false;
  newProduct = { name: '', description: '', price: 0, image: '' };

  constructor(public translationService: TranslationService) {}


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
