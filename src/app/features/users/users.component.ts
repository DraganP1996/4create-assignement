import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { ContainerComponent, ModalComponent } from '@shared/components';
import { UserListComponent } from './components';
import { UsersQuery } from '@stores/user';
import { UserService } from '@shared/services';
import { CreateUserComponent } from '@features/create-user/create-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    ContainerComponent,
    CreateUserComponent,
    UserListComponent,
    ModalComponent,
    AsyncPipe,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  isCreateUserModalOpen$: Observable<boolean>;

  constructor(
    private _userQuery: UsersQuery,
    private _userService: UserService
  ) {
    this.isCreateUserModalOpen$ = this._userQuery.selectIsCreateUserModalOpen();
  }

  closeCreateUserModal() {
    console.log('Close modal clicked');
    this._userService.toggleCreateUserModal(false);
  }
}
