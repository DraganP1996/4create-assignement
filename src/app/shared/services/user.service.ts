import { Injectable } from '@angular/core';

import { User, UsersStore } from '@stores/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _usersStore: UsersStore) {}

  addUser(user: User) {
    this._usersStore.add(user);
  }

  updateUser(id: number, user: Partial<User>) {
    this._usersStore.update(id, user);
  }

  removeUser(id: number) {
    this._usersStore.remove(id);
  }
}
