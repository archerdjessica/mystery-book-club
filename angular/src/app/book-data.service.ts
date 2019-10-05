import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  getBooksUrl: string;
  getBookByIdUrl: string;
  addBookUrl: string;
  constructor(private http:HttpClient) {
    this.getBooksUrl="http://localhost:4000/books";
    this.getBookByIdUrl="http://localhost:4000/book/";
    this.addBookUrl="http://localhost:4000/addBook";
   }

   public getAllBooks():Observable<Book[]>{
     return this.http.get<Book[]>(this.getBooksUrl);
   }

   public getBookById(id:number){
     return this.http.get<Book>(this.getBookByIdUrl+id);
   }

   public addBook(book:Book){
     return this.http.post<Book>(this.addBookUrl, book);
   }
}
