import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// modules
import { ProductModule } from './Products/product.module';
import { UserModule } from './User/user.module';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./User/user.module').then(m => m.UserModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./Products/product.module').then(m => m.ProductModule)
  },
  {
    path: 'dash-board',
    loadChildren: () =>
      import('./dash-board/dash-board.module').then(m => m.DashBoardModule)
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteConfig {}
