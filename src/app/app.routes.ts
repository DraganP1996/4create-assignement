import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    title: 'Users Table',
    path: 'users',
    loadComponent: () =>
      import('./features/users/users.component').then((m) => m.UsersComponent),
  },
  {
    title: 'Home',
    path: '',
    component: HomeComponent,
  },
];
