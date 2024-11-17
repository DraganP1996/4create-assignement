import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {}
