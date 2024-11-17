import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
