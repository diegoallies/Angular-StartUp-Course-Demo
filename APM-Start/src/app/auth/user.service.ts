import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = '';
  private email = '';
  private phone = '';

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setPhone(phone: string) {
    this.phone = phone;
  }

  getPhone() {
    return this.phone;
  }

}
