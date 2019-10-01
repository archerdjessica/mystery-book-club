import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit-info',
  templateUrl: './user-edit-info.component.html',
  styleUrls: ['./user-edit-info.component.css']
})
export class UserEditInfoComponent implements OnInit {

  dummyUser:User;

  constructor() { 

  }

  ngOnInit() {
    this.dummyUser={
      id:1,
      name:'dummy',
      email:'user@dummy.com',
      password:'badpassword',
      birthday:'January 1',
      readingList:['book 1', 'book 2']
    }
  }

}

export class User{
  id:number;
  name:string;
  email:string;
  password:string;
  birthday:string;
  readingList:string[];
}