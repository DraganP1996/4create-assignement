import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ButtonComponent } from '../ui';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
