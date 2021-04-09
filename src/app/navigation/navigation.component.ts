import {Component, OnInit} from '@angular/core';
import {UserInfoService} from '../_services/user-info.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isLoggedIn = false;

  constructor(private userService: UserInfoService,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.signOut();
    this.router.navigateByUrl('/');
    window.location.reload();
  }

  register(): void {
    this.modalService.open(RegisterComponent);
  }

  login(): void {
    this.modalService.open(LoginComponent);
  }
}
