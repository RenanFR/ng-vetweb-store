import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TokenService } from '../shared/token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public newProductSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {
  }

  saveProduct(product: Product, fileImage: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('product', JSON.stringify(product));
    formData.append('fileImage', fileImage);
    return this.httpClient.post(environment.PRODUCTS_API, formData, 
      {
        responseType: 'text',
        observe: 'events',
        reportProgress: true
      });
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.PRODUCTS_API);
  }

  delete(id: number):Observable<string> {
    return this.httpClient.delete<string>(`${environment.PRODUCTS_API}/${id}`);
  }

  edit(product: Product): Observable<string> {
    return this.httpClient.put<string>(environment.PRODUCTS_API, product);
  }

  findById(id: number):Observable<Product> {
    return this.httpClient.get<Product>(`${environment.PRODUCTS_API}/${id}`);
  }

  getTotal():Observable<any> {
    return this.httpClient.get(`${environment.PRODUCTS_API}/total`);
  }

  drilldown(): Observable<any> {
    return this.httpClient.get(`${environment.PRODUCTS_API}/drilldown`);
  }


}
