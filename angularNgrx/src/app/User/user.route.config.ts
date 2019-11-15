import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {UserComponent} from './pages/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login-page', component: LoginComponent },
      {path: 'registration-page', component: RegistrationComponent},
      {
        path: '**',
        redirectTo: 'login-page',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouteConfig {}
