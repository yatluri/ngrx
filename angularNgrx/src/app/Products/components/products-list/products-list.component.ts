import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
// local-services
import { ProductService } from '../../services/product.service';

// models...
import { Product, ProductListView } from '../../models/index';
import { async } from 'q';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  pCollection$: Observable<Array<Product>> = this.pService.pCollection$;
  pCollection: Array<Product> = [];
  vm = new ProductListView();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataSource: MatTableDataSource<Product>;
  constructor(private pService: ProductService) {}

  ngOnInit() {
    this.pService.initializeProducts().subscribe((p: Array<Product>) => {
      this.dataSource = new MatTableDataSource<Product>(p);
      this.dataSource.paginator = this.paginator;
      this.vm.productsLength = p.length;
    });
  }
  ngAfterViewInit() {}
  addProduct() {}
}
