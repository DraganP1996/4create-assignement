import { Component } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { ButtonComponent } from '../ui';
import { UserService } from '@shared/services';
import { UsersQuery } from '@stores/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonComponent, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  enableCreateButton$: Observable<boolean>;

  constructor(
    public router: Router,
    private _userService: UserService,
    private _userQuery: UsersQuery
  ) {
    this.enableCreateButton$ = this._userQuery.areAllUserActive$().pipe(
      switchMap((areAllActive: boolean) => {
        return !areAllActive
          ? of(false)
          : this._userQuery.selectCount().pipe(map((count) => count < 5));
      })
    );
  }

  openCreateUserModal() {
    this._userService.toggleCreateUserModal(true);
  }
}
