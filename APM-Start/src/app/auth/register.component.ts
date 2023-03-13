import { Component } from '@angular/core';

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
  theme = '';

  onSubmit() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Save registration data to localStorage
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    localStorage.setItem('email', this.email);
    localStorage.setItem('phone', this.phone);
    localStorage.setItem('theme', this.theme);
    alert('Registration successful');
  }
}
