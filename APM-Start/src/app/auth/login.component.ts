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
  email = '';
  phone = '';
  isSignIn: boolean = false;
  
  constructor(
    private userService: UserService
  ){}

  onLoginSubmit() {
    const success = this.userService.loginUserDB(this.username, this.password);
    if (success) {
      alert('Login successful');
      window.location.href = '/products'; // redirect to login page
    } else {
      alert('Incorrect username or password');
    }
  }

  
  onRegisterSubmit() {
    // Save registration data to localStorage
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      phone: this.phone
    }
    this.userService.registerUserDB(user)

    
    alert('Registration successful');
    window.location.href = '/login'; // redirect to login page



  }

  toggleSignIn() {
    this.isSignIn = !this.isSignIn;
  }
}


