import { NgModule } from '@angular/core';
import { ProductsRouteConfig } from './products.route.config';
import { ProductsListComponent } from '../Products/components/products-list/products-list.component';
import { ProductsDetailComponent } from '../Products/components/products-detail/products-detail.component';
import { SharedModule } from '@shared/shared.module';

// angular material components...
import {MatTableModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductsListComponent, ProductsDetailComponent],
  imports: [
    SharedModule,
     ProductsRouteConfig,
     MatBadgeModule,
     MatButtonModule,
     MatCardModule,
     MatCheckboxModule,
     MatIconModule,
     MatTableModule,
     MatPaginatorModule],
  exports: [ProductsListComponent, ProductsDetailComponent]
})
export class ProductsModule {}
