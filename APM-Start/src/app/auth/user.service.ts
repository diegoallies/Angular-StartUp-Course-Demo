import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = '';
  private email = '';
  private phone = '';

  registerUserDB(user: any){
    let registered = localStorage.getItem("registered")
    let reg 
    if(registered){
      reg = JSON.parse(registered)
    }else{
      reg = []
    }
    let array =  reg
    array.push(user)
    const newEntry = JSON.stringify(array)
    localStorage.setItem("registered", newEntry)
    return
  }
  loginUserDB(username: string, password: string) {
    let registered = localStorage.getItem("registered");
    let reg;
    if (registered) {
      reg = JSON.parse(registered);
    } else {
      reg = [];
    }
  
    let loggedIn = localStorage.getItem("loggedIn");
    let log;
    if (loggedIn) {
      log = JSON.parse(loggedIn);
    } else {
      log = [];
    }
  
    let user = reg.find((u: any) => u.username === username && u.password === password);
    if (user) {
      log = user; // Replace previous logged-in user with new user
      const newEntry = JSON.stringify(log);
      localStorage.setItem("loggedIn", newEntry);
      return true;
    } else {
      return false;
    }
  }


  updateUserDB(user: any) {
    let registered = localStorage.getItem("registered");
    let reg;
    if (registered) {
      reg = JSON.parse(registered);
    } else {
      reg = [];
    }
  
    // Find the user in the registered array and update their data
    let index = reg.findIndex((u: any) => u.email === user.email);
    if (index > -1) {
      reg[index] = user;
    } else {
      // Handle case where user is not found
      console.error("User not found in registered array");
      return;
    }
  
    const newEntry = JSON.stringify(reg);
    localStorage.setItem("registered", newEntry);
  
    let loggedIn = localStorage.getItem("loggedIn");
    let log;
    if (loggedIn) {
      log = JSON.parse(loggedIn);
      log = user;
      const newLogEntry = JSON.stringify(log);
      localStorage.setItem("loggedIn", newLogEntry);
    }
  }
  
  
  
  
}