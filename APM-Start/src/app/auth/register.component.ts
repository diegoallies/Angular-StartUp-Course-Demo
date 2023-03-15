import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  phone = '';
  
  constructor(
    private userService: UserService
  ){}

  onSubmit() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
      
    }
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
}
