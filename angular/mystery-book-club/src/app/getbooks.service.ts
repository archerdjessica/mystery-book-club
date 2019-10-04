import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Review} from './review';

import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class GetBooksService {
private getBookUrl:string;
private getBookReviewUrl:string;

  constructor(private http:HttpClient) { 
    this.getBookUrl = "";
    this.getBookReviewUrl = "";
  }
  public getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.getBookUrl);

  }
  public getReviews(bookId:number):Observable<Review[]>{
        return this.http.get<Review[]>(this.getBookReviewUrl);
  }
}
