import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
baseUrl:string;
  getBooksUrl: string;
  getBookByIdUrl: string;
  addBookUrl: string;
  constructor(private http:HttpClient) {
    this.baseUrl="http://3.15.222.76:5100";
    this.getBooksUrl=this.baseUrl+"/books";
    this.getBookByIdUrl=this.baseUrl+"/book/";
    this.addBookUrl=this.baseUrl+"/addBook";
   }

   public getAllBooks():Observable<Book[]>{
     console.log("Should have a book");
     return this.http.get<Book[]>(this.getBooksUrl);
   }

   public getBookById(id:number){
     return this.http.get<Book>(this.getBookByIdUrl+id);
   }

   public addBook(book:Book){
     return this.http.post<Book>(this.addBookUrl, book);
   }
}
