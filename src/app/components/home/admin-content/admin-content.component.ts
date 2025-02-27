import { Component } from '@angular/core';
import { TranslationService } from '../../../Services/translation.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrl: './admin-content.component.css'
})
export class AdminContentComponent {

  isModalOpen = false;

  constructor(public translationService : TranslationService){}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
