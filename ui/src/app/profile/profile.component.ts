import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userName: String = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.user$.subscribe((user: String) => {
      this.userName = user ? user : '';
    });
  }

  logout() {
    this.userService.clearUser();
    this.router.navigate(['/']);
  }
}
