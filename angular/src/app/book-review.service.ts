import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookReviewService {
  private readURL: string;
  private writeURL: string;
  private editURL: string;
  private deleteURL: string;
  constructor(private http: HttpClient) {
    this.readURL = "http://localhost:4000/reviews";
    this.writeURL = "http://localhost:4000/writeReview";
    this.editURL = "http://localhost:4000/editReview";
    this.deleteURL = "http://localhost:4000/deleteReview/{id}";
  }

  public saveReview(review: Review) {
    return this.http.post<Review>(this.writeURL, review);
  }

  public readReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.readURL);
  }

  public editReview(review: Review) {
    return this.http.put<Review>(this.editURL, review);
  }

  public deleteAnimal(id: number) {
    return this.http.delete<Review>(this.deleteURL + id);
  }
}
