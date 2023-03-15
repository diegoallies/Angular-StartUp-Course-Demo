import { Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Encrypto Product Management';
  username = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    const localUser: any = localStorage.getItem('loggedIn');
    const user = JSON.parse(localUser);
    this.username = user.username;
  }
}
