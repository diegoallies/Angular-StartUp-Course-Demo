import { Component, OnInit } from "@angular/core";
import { GlobalService } from "./shared/global.service";

declare var myGlobalVar: string;

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  pageTitle = 'Encrypto Product Management';
  username = '';

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn && isLoggedIn === 'true') {
      this.username = localStorage.getItem('username') || '';
    }

    console.log(this.username)

    // Subscribe to the username observable in the global service
    this.globalService.getUsername().subscribe((username: string) => {
      this.username = username;
      console.log(this.username)
      // myGlobalVar = this.username;
    });
  }
}
