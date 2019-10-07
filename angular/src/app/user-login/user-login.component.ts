import { User } from './../user-edit-info/user-edit-info.component';
import { Component, OnInit } from '@angular/core';
//import  { User} from './user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
    user:User;
  constructor() { }

  ngOnInit() {
  }

}
