import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { ButtonComponent } from '../ui';
import { UserService } from '@shared/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public router: Router, private _userService: UserService) {}

  openCreateUserModal() {
    this._userService.toggleCreateUserModal(true);
  }
}
