import {Component} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm: RegisterFormModel = {
    username: '',
    email: '',
    password: ''
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  closeResult = '';

  constructor(private authService: AuthService, public activeModal: NgbActiveModal) {
  }

  onSubmit(): void {
    this.authService.register(this.regForm).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
        this.close();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
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

export interface RegisterFormModel {
  username: string;
  email: string;
  password: string;
}
