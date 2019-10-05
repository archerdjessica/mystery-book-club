import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { User} from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  user:User;
  constructor(private userService:UserService, private router:Router){
      this.user = new User();
  }   
    createUser(){
      this.userService.createUser(this.user).subscribe(data=>this.goToUserList())
    }
    goToUserList(){
    this.router.navigate(['/user']);
  }
}


