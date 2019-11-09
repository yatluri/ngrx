import { NgModule } from '@angular/core';
import { ProductsRouteConfig } from './products.route.config';
import { ProductsListComponent } from '../Products/components/products-list/products-list.component';
import { ProductsDetailComponent } from '../Products/components/products-detail/products-detail.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ProductsListComponent, ProductsDetailComponent],
  imports: [SharedModule, ProductsRouteConfig],
  exports: [ProductsListComponent, ProductsDetailComponent]
})
export class ProductsModule {}
