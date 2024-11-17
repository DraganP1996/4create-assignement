import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ContainerComponent, UserListComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {}
