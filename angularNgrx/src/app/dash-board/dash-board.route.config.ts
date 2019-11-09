import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashBoardComponent } from './pages/dash-board.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('../Products/products.module').then(m => m.ProductsModule)
      },
      {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRouteConfig {}
