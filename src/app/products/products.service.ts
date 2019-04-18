import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

const api = 'http://localhost:8080/vetweb/store/api/products'
@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(api, product);
  }

}
