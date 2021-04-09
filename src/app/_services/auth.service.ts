import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterFormModel } from '../register/register.component';
import { LoginFormModel } from '../login/login.component';
import { environment } from '../../environments/environment';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginFormModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/auth/sign_in', {
      username: credentials.username,
      password: credentials.password
    }, HTTP_OPTIONS);
  }

  register(userData: RegisterFormModel): Observable<any> {
    return this.http.post('http://localhost:8080/api/v1/auth/sign_up', {
      username: userData.username,
      email: userData.email,
      password: userData.password
    }, HTTP_OPTIONS);
  }
}
