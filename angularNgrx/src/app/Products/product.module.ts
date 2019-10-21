import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductsRouteConfig } from './products.route.config';
// components
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [SharedModule, ProductsRouteConfig],
  exports: []
});
export class ProductModule {}
