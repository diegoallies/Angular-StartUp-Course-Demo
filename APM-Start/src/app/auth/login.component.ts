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
  isLoggedIn = false;

  constructor(private userService: UserService) {}

  onSubmit() {
    // Retrieve user data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');

    // Check if user input matches stored credentials
    if (this.username.trim() === storedUsername && this.password.trim() === storedPassword) {

         if (this.isLoggedIn) {
      localStorage.setItem('username', storedUsername);
      localStorage.setItem('isLoggedIn', 'true');
      
      // Store user data in UserService, but only if the values are not null
      this.userService.setUsername(storedUsername);
      if (storedEmail) {
        this.userService.setEmail(storedEmail);
      }
      if (storedPhone) {
        this.userService.setPhone(storedPhone);
      }
    } else {
      alert('Invalid login credentials');
    }
  }
}}
