import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  
  constructor(private tokenService: TokenService) {}

  setUser(response: any) {
    // Store JWT token
    this.tokenService.setToken(response.token);
    this.userSubject.next(response.username);
  }

  clearUser() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
}
