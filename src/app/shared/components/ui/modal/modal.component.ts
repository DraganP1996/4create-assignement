import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CloseIconComponent } from '../icons';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CloseIconComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() title = '';

  @Output() onClose = new EventEmitter<void>();
}
