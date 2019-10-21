import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login-page', component: LoginComponent },
  {
    path: '**',
    redirectTo: 'login-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouteConfig {}
