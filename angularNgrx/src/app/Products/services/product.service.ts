import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';

// models
import {Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private currentCollection: Subject<Array<Product>> = new Subject<Array<Product>>();
  readonly pCollection$: Observable<Array<Product>> = this.currentCollection.asObservable();

  constructor(private db: AngularFirestore) { }

  initializeProducts(): Observable<Array<Product>> {
  const collection: Observable<Array<Product>> =  this.db.collection('product-collection').valueChanges().pipe(map((p: Product[]) => {
    console.log(p);
    this.currentCollection.next(p);
    return p;
  }));
  return collection;
  }
  addProducts(param: Product) {
    this.db.firestore.collection('product-collection').add(param);
  }
}
