import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string;
  private createUrl: string;
  private getUsersUrl: string;
  private updateUrl: string;
  private startSessionUrl: string;
  private endSessionURL: string;
  constructor(private http: HttpClient) {
    this.baseUrl="http://3.15.222.76:5100";
    this.createUrl = this.baseUrl+"/registerUser";
    this.getUsersUrl = this.baseUrl+"/users";
    this.updateUrl = this.baseUrl+"/updateUser";
    this.startSessionUrl = this.baseUrl+"/isValidUser";
    this.endSessionURL = this.baseUrl+"/destory";
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
