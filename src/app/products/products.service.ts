import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { UsefulConstants } from '../shared/useful.constants';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  saveProduct(product: Product): Observable<any> {
    return this.httpClient.post(UsefulConstants.PRODUCTS_API, product, { responseType: 'text' });
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(UsefulConstants.PRODUCTS_API);
  }

  delete(id: number):Observable<string> {
    return this.httpClient.delete<string>(`${UsefulConstants.PRODUCTS_API}/${id}`);
  }

  edit(product: Product): Observable<string> {
    return this.httpClient.put<string>(UsefulConstants.PRODUCTS_API, product);
  }

  findById(id: number):Observable<Product> {
    return this.httpClient.get<Product>(`${UsefulConstants.PRODUCTS_API}/${id}`);
  }

  getTotal():Observable<any> {
    return this.httpClient.get(`${UsefulConstants.PRODUCTS_API}/total`);
  }


}
