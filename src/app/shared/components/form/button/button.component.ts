import { Component, Input } from '@angular/core';
import { ButtonTypes } from './button.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() tilt?: boolean = false;
  @Input() type: ButtonTypes = 'primary';
}
