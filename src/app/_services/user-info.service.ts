import { Injectable } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private tokenStorage: TokenStorageService) { }

  public getUsername(): string {
    return JSON.parse(this.tokenStorage.getUser()).username;
  }

  public getRoles(): string[] {
    return JSON.parse(this.tokenStorage.getUser()).roles;
  }

  public getEmail(): string {
    return JSON.parse(this.tokenStorage.getUser()).email;
  }

  public isLoggedIn(): boolean {
    let token = this.tokenStorage.getToken();
    return (typeof token !== 'undefined' && token !== "");
  }

  public signOut(): void {
    this.tokenStorage.signOut();
  }
}
