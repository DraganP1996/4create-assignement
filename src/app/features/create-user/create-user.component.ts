import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components';
import { InputComponent, ToggleComponent } from '@shared/components/form';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ToggleComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {}
