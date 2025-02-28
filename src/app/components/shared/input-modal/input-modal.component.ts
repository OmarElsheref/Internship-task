import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../../../Services/data-storage.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrl: './input-modal.component.css'
})
export class InputModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() productAdded = new EventEmitter<void>();

  name = '';
  description = '';
  price: number = 0;
  imageUrl = '';

  constructor(private dataStorageService: DataStorageService) {}

  addProduct() {
    if (!this.name || !this.description || this.price === null || !this.imageUrl) {
      console.error("All fields are required");
      return;
    }

    const newProduct = {
      name: this.name,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };

    this.dataStorageService.addProduct(newProduct).subscribe(response => {
      console.log("Product added:", response);
      this.closeModal();
    }, error => {
      console.error("Error adding product:", error);
    });
  }
  
  closeModal() {
    this.close.emit();
  }
}
