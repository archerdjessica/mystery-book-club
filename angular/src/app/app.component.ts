import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mystery Book Club';

  user: User;
  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  public logOut() {
    this.userService.logOut(this.user).subscribe(data => { this.router.navigate([data]) });
// doesn't work
  }
}