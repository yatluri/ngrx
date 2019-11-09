import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

const productRoutes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRouteConfig {}
