import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import {
  SimpleTableColumn,
  SimpleTableComponent,
  SimpleTableRow,
} from '@shared/components';
import { User, UsersQuery } from '@stores/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SimpleTableComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(private _usersQuery: UsersQuery) {
    this.users$ = this._usersQuery.selectAll();
  }

  cols: SimpleTableColumn[] = [
    { key: 'id', name: 'Id', align: 'left' },
    { key: 'name', name: 'Name', align: 'left' },
    { key: 'active', name: 'Active', align: 'left' },
  ];

  rows: SimpleTableRow[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Sam Brown', age: 22, email: 'sam@example.com' },
  ];
}
