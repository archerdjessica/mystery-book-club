import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  private baseUrl:string;
  private readAllURL: string;
  private bookReviewsURL: string;
  private writeURL: string;
  private editURL: string;
  private deleteURL: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://3.15.222.76:5100";
    this.readAllURL = this.baseUrl+"/reviews";
    this.writeURL = this.baseUrl+"/writeReview";
    this.editURL = this.baseUrl+"/editReview";
    this.deleteURL = this.baseUrl+"/deleteReview/";
    this.bookReviewsURL = this.baseUrl+"/review/"
  }

  public saveReview(review: Review) {
    return this.http.post<Review>(this.writeURL, review);
  }

  public readReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.readAllURL);
  }

  public bookReviews(book: number){
    return this.http.get<Review[]>(this.bookReviewsURL + book);
  }

  public editReview(review: Review) {
    return this.http.put<Review>(this.editURL, review);
  }

  public deleteReview(id: number) {
    return this.http.delete<Review>(this.deleteURL + id);
  }
}
