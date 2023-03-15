import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private usernameSubject = new BehaviorSubject<string>('');

  constructor() {}

  setUsername(username: string) {
    this.usernameSubject.next(username);
  }

  getUsername() {
    return this.usernameSubject.asObservable();
  }
}
