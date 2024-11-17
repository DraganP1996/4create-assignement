import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './user.model';
import { Injectable } from '@angular/core';

export interface UsersState extends EntityState<User, number> {
  isCreateUserModalOpen: boolean;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super();

    // Hardcoded initial users on the FE side
    this.set([
      { id: 1, name: 'John Doe', active: true },
      { id: 2, name: 'Jane Smith', active: true },
    ]);
  }
}
