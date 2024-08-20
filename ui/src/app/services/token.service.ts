import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'authToken';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // NOTE : To be used only in User Service
  setToken(token: string | any): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // NOTE : To be used only in User Service
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
