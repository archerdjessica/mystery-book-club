import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataService {
  baseUrl: string;
  getAuthorListUrl: string;
  addAuthorUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://3.15.222.76:5100";
    this.getAuthorListUrl = this.baseUrl + "/authors";
    this.addAuthorUrl = this.baseUrl + "/addAuthor";
  }

  public authorList(): Observable<Author[]> {
    return this.http.get<Author[]>(this.getAuthorListUrl);
  }

  public addAuthor(author: Author) {
    return this.http.post<Author>(this.addAuthorUrl, author);
  }
}
