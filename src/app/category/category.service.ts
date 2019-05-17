import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';
import { UsefulConstants } from '../shared/useful.constants';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient:HttpClient,
    private tokenService:TokenService
  ) {}
    
  save(category:Category):Observable<any> {
    return this.httpClient.post(UsefulConstants.CATEGORIES_API, category, {responseType: 'text'});
  }

  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(UsefulConstants.CATEGORIES_API);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(UsefulConstants.CATEGORIES_API + '/' + id);
  }

}
