import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import {
  SimpleTableColumn,
  SimpleTableComponent,
  SimpleTableRow,
} from '@shared/components';
import { User, UsersQuery } from '@stores/user';
import { UserService } from '@shared/services';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SimpleTableComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(
    private _usersQuery: UsersQuery,
    private _userService: UserService
  ) {
    this.users$ = this._usersQuery.selectAll();
  }

  cols: SimpleTableColumn[] = [
    { key: 'id', name: 'Id', align: 'left', type: 'text' },
    { key: 'name', name: 'Name', align: 'left', type: 'text' },
    { key: 'active', name: 'Active', align: 'left', type: 'toggle' },
  ];

  rows: SimpleTableRow[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
  ];

  userToggle({ id, value }: { id: number; value: boolean }) {
    this._userService.updateUser(id, { active: value });
  }
}
