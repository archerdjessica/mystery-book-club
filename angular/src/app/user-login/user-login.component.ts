import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user: User;
  constructor(private userService: UserService) {
    this.user = new User();
  }

  public userLogin() {
    this.userService.logIn(this.user).subscribe(data => {
      if (data == null) { console.log("null") }
      else { this.user = data; }
    });
    console.log(this.user);
  }
}
