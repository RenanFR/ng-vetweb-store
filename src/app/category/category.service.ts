import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { UsefulConstants } from '../shared/useful.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  save(category:Category):Observable<any> {
    return this.httpClient.post(UsefulConstants.CATEGORIES_API, category,{responseType: 'text'});
  }

  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(UsefulConstants.CATEGORIES_API);
  }

}
