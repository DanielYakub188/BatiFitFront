import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then((m) => m.ProfilePage),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'regist-product',
    loadComponent: () =>
      import('./pages/regist-product/regist-product.page').then(
        (m) => m.RegistProductPage,
      ),
  },
];
