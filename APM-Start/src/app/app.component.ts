import { Component } from "@angular/core";

// @Component({
//   selector: 'pm-root',
//   template: `
//   <nav class='navbar navbar-expand navbar-light bg-light'>
//   <a class='navbar-brand'>{{pageTitle}}</a>
//   <ul class='nav nav-pills'>
//     <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
//     <li><a class='nav-link' routerLink='/products'>Product List</a></li>
//   </ul>
//   <button class='btn btn-outline-primary ml-auto' routerLink='/cart'>Cart</button>
// </nav>

//   <div class='container'>
//     <router-outlet></router-outlet>
//   </div>
//   `
// })

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  pageTitle: string = 'Encrypto Product Management';
}