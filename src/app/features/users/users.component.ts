import { Component } from '@angular/core';

import { ContainerComponent } from '@shared/components';
import { UserListComponent } from './components';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ContainerComponent, UserListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
