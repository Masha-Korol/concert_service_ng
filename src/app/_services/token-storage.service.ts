import { Injectable } from '@angular/core';
import { LoginResponseModel } from '../login/login.component';
import { CookieService } from 'ngx-cookie';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private cookieService: CookieService) { }

  signOut(): void {
    this.cookieService.removeAll();
  }

  public saveToken(token: string): void {
    this.cookieService.remove(TOKEN_KEY);
    this.cookieService.put(TOKEN_KEY, token);
  }

  public getToken(): string {
    return this.cookieService.get(TOKEN_KEY);
  }

  public saveUser(user: LoginResponseModel): void {
    this.cookieService.remove(USER_KEY);
    this.cookieService.put(USER_KEY, JSON.stringify(user));
  }

  public getUser(): string {
    return this.cookieService.get(USER_KEY);
  }
}
