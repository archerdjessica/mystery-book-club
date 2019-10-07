import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUrl: string;
  private getUsersUrl: string;
  private updateUrl: string;
  private startSessionUrl: string;
  private endSessionURL: string;
  constructor(private http: HttpClient) {
    this.createUrl = "http://localhost:4000/registerUser";
    this.getUsersUrl = "http://localhost:4000/users";
    this.updateUrl = "http://localhost:4000/updateUser";
    this.startSessionUrl = "http://localhost:4000/isValidUser";
    this.endSessionURL = "http://localhost:4000/destory";
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.createUrl, user);
  }

  public updateUser(user: User) {
    return this.http.put<User>(this.updateUrl, user);
  }

  public logIn(user: User){
    return this.http.post<User>(this.startSessionUrl, user);
  }
  public logOut(user: User) {
    return this.http.post<User>(this.endSessionURL, user);
  }
}
