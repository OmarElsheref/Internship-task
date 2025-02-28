import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
