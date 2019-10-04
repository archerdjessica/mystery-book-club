import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  user:User;

  constructor() {
    this.user={"id":0, "name":"Sam", "email":"SamIsGreat@email.com", "birthday":"Dec31 1989", "readingList":[], "password":"pw"};
    console.log("editing user: "+this.user)
   }

  ngOnInit() {
    
  }

  public updateUser(user:User):void{
    console.log("user update: "+user);
  }

}
