import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from '../../core/auth/guest.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuestGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./components/login/login-standalone.component').then(c => c.LoginStandaloneComponent) },
      { path: 'register', loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }