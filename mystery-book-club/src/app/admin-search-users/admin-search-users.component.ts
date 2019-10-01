import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-search-users',
  templateUrl: './admin-search-users.component.html',
  styleUrls: ['./admin-search-users.component.css']
})
export class AdminSearchUsersComponent implements OnInit {

  users:User[]=[
    {"id":0, "name":"Sam", "email":"SamIsGreat@email.com", "birthday":"Dec31 1989", "readingList":[], "password":"pw"},
    {"id":1, "name":"Jessica", "email":"jessicat@yeet.yo", "birthday":"28 Feb 1996", "readingList":[], "password":"pw"},
  ]

  constructor() {
   }

  ngOnInit() {
  }

  public editUser(user:User){
    console.log("selected: edit user: "+user);
  };




}
