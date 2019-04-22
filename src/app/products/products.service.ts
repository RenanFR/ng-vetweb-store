import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private api = 'http://localhost:8080/vetweb/store/api/products'

  constructor(private httpClient: HttpClient) {
  }

  saveProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.api, product, { responseType: 'text' });
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.api);
  }

  delete(id: number):Observable<string> {
    return this.httpClient.delete<string>(`${this.api}/${id}`);
  }

  edit(product: Product): Observable<string> {
    return this.httpClient.put<string>(this.api, product);
  }

  findById(id: number):Observable<Product> {
    return this.httpClient.get<Product>(`${this.api}/${id}`);
  }

  getTotal():Observable<any> {
    return this.httpClient.get(`${this.api}/total`);
  }


}
