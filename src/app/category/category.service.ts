import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

const api = 'http://localhost:8080/vetweb/store/api/categories'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  save(category:Category):Observable<Object> {
    return this.httpClient.post<Object>(api, category);
  }

  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(api);
  }

}
