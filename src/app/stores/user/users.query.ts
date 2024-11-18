import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QueryEntity } from '@datorama/akita';

import { UsersState, UsersStore } from './users.store';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState, User, number> {
  constructor(protected override store: UsersStore) {
    super(store);
  }

  selectAllUsders(): Observable<User[]> {
    return this.selectAll();
  }

  selectAllActiveUsers(): Observable<User[]> {
    return this.selectAll().pipe(
      map((users) => users.filter((user) => user.active))
    );
  }

  selectIsCreateUserModalOpen(): Observable<boolean> {
    return this.select((state) => state.isCreateUserModalOpen);
  }

  selectUserByName(name: string): Observable<User | undefined> {
    return this.selectAll().pipe(
      map((users) => users.find((user) => user.name === name))
    );
  }

  areAllUserActive$(): Observable<boolean> {
    return this.selectAll().pipe(
      map((user) => user.every((user) => user.active))
    );
  }
}
