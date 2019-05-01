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
  ) {
      
    }
    
  headers: HttpHeaders = new HttpHeaders({'Authorization': this.tokenService.getToken()});;

  save(category:Category):Observable<any> {
    return this.httpClient.post(UsefulConstants.CATEGORIES_API, category, {responseType: 'text', headers: this.headers});
  }

  getCategories():Observable<Category[]> {
    return this.httpClient.get<Category[]>(UsefulConstants.CATEGORIES_API, {headers: this.headers});
  }

}
