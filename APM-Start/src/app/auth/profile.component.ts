import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'pm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {};
  username = '';
  password = '';
  confirmPassword = '';
  email = '';
  phone = '';
  successMessage = '';

  constructor(
    private userService: UserService
  ){}

  ngOnInit() {
    let loggedIn = localStorage.getItem("loggedIn");
    let log;
    if (loggedIn) {
      log = JSON.parse(loggedIn); 
      this.user = log; 

      console.log(log, 'this is initial user')

      if (this.user.username) {
        this.username = this.user.username;
      }
      this.email = this.user.email;
      this.phone = this.user.phone;
    }


    
  }

  onSubmit() {
    // validate password and confirm password
    if (this.password !== this.confirmPassword) {
      alert("Password and Confirm Password fields should match.");
      return;
    }

    // update user data
    this.userService.updateUserDB(this.user);
    console.log(this.user, 'this is updated user')
    window.location.href = '/profile'; // redirect to login page


    // show success message
    this.successMessage = 'Data saved successfully.';
    setTimeout(() => { this.successMessage = ''; }, 3000);
  }

  onLogout() {
    this.userService.logoutUser();
  }
  
  
  
}
