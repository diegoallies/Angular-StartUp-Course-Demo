import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  
  constructor(
    private userService: UserService
  ){}

  onSubmit() {
    const success = this.userService.loginUserDB(this.username, this.password);
    if (success) {
      alert('Login successful');
    } else {
      alert('Incorrect username or password');
    }
  }
}
