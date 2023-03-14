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
    this.userService.updateUserDB(this.user);
    console.log(this.user, 'this is updated user')

  }
}
