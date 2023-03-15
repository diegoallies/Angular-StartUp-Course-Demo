import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn) {
      return true;
    } else {
      alert('Please login first.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
