import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {

  getAuthorListUrl: string;
  addAuthorUrl: string;
  constructor(private http:HttpClient) { 
    this.getAuthorListUrl = "http://localhost:4000/authors";
    this.addAuthorUrl = "http://localhost:4000/addAuthor";
  }

  public authorList():Observable<Author[]>{
    return this.http.get<Author[]>(this.getAuthorListUrl);
  }

  public addAuthor(author: Author) {
    return this.http.post<Author>(this.addAuthorUrl, author);
  }
}
