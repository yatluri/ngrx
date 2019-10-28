import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashBoardComponent } from './pages/dash-board.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products/products-detail/products-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    children: [
      {
        path: 'product-list',
        component: ProductsListComponent,
        pathMatch: 'full'
      },
      {
        path: 'product-detail',
        component: ProductsDetailComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'product-list',
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
