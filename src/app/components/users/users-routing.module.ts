import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from '../../services/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', canActivate: [AuthGuard], component: SigninComponent, data: { page: 'signin' } },
      { path: 'signup', canActivate: [AuthGuard], component: SignupComponent, data: { page: 'signup' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
