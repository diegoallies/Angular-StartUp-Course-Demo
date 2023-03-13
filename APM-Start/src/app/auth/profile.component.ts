import { Component } from '@angular/core';
import { UserService } from './user.service';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'pm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username = '';
  email = '';
  phone = '';

  constructor(
    private userService: UserService,
    private globalService: GlobalService // Inject GlobalService
  ) {
    // Load user data from UserService
    this.username = this.userService.getUsername();
    this.email = this.userService.getEmail();
    this.phone = this.userService.getPhone();

    // Set the global variable
    this.globalService.setUsername(this.username);
  }

  onSubmit() {
    // Save user data to UserService
    this.userService.setUsername(this.username);
    this.userService.setEmail(this.email);
    this.userService.setPhone(this.phone);

    // Set the global variable
    this.globalService.setUsername(this.username);

    alert('Profile saved!');
    console.log('clicks')
  }
}
