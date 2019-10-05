import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private createUrl:string;
  private getUsersUrl:string;
  private updateUrl:string;
  constructor(private http:HttpClient) { 
    this.createUrl ="http://localhost:2000/createUser";
    this.getUsersUrl="http://localhost:2000/users";
    this.updateUrl ="http://localhost:2000/updateUser";
  } 

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.getUsersUrl);
  }

  public createUser(user:User){
    return this.http.post<User>(this.createUrl, user);
  }
  public updateUser(user:User){
    return this.http.put<User>(this.updateUrl, user);
  }
}
