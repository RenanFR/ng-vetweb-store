import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { UsefulConstants } from '../shared/useful.constants';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {
  }

  saveProduct(product: Product): Observable<any> {
    return this.httpClient.post(UsefulConstants.PRODUCTS_API, product, { responseType: 'text' });
  }

  getProducts(): Observable<Product[]> {
    let token = this.tokenService.getToken();
    let headers = new HttpHeaders({'Authorization': token});
    return this.httpClient.get<Product[]>(UsefulConstants.PRODUCTS_API, {headers: headers});
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
