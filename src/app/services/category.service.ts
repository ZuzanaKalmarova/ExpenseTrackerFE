import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
//import { CATEGORIES } from '../shared/categories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrMsgService } from './http-err-msg.service';
import { BASEURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = BASEURL + 'categories';
  
  constructor(private http: HttpClient,
    private httpErrMsgService: HttpErrMsgService) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  addCategory(category: Category): Observable<Category>{
    //category.id = String(CATEGORIES.length+1);
    //return Promise.resolve(CATEGORIES.push(category));
    return this.http.post<Category>(this.categoryUrl, category)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  updateCategory(category: Category): Observable<Category>{
    let id = category.id;
    
    //return Promise.resolve(CATEGORIES[CATEGORIES.findIndex(cat => cat.id == id)] = category);
    return this.http.put<Category>(`${this.categoryUrl}/${id}`, category)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }

  deleteCategory(category: Category): Observable<Category>{
    let id = category.id;
    return this.http.delete<Category>(`${this.categoryUrl}/${id}`)
    .pipe(catchError(this.httpErrMsgService.handleError));
  }
}
