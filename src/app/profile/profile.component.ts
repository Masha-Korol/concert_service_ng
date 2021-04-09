import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../_services/user-info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserInfoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.signOut();
    this.router.navigateByUrl('/');
    window.location.reload();
  }
}
