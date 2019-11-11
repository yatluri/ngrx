import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// local-services
import {ProductService} from '../../services/product.service';

// models...
import {Product, ProductListView} from '../../models/index';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  pCollection$: Observable<Array<Product>> = this.pService.pCollection$;
  vm = new ProductListView();
  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.addProduct();
    this.pService.initializeProducts().subscribe();
  }
addProduct() {
  const p: Product = {
    Id: 309,
    SubTypeCode: 'none',
    CompanyId: 601497,
    StatusCode: 'ACTV',
    BussinessLevelCode: 'COMP',
    UserId: 0,
    Description: 'custom black mugs',
    Name: 'Andrei custom mugs',
    MediaId: '5919887',
    MediaPath: 'assets/images/mug-2.jpg',
    UsedOnCompanyStore: true,
    ProductCount: 4,
    WebsiteCout: 5,
    DisplaySequence: null,
    IsVisible: true
  };
  this.pService.addProducts(p);
}
}
