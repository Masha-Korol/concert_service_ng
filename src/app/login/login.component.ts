import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginFormModel = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    // tslint:disable-next-line:no-non-null-assertion
    this.authService.login(this.loginForm!).subscribe(
      (data: LoginResponseModel) => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        this.close();
      },
      err => {
        if (isDevMode()) {
          console.log(err.error.message);
        }
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


  close(): void {
    this.activeModal.close();
  }

}

export interface LoginResponseModel{
  username: string;
  email: string;
  accessToken: string;
  tokeType: string;
}

export interface LoginFormModel{
  username: string;
  password: string;
}

