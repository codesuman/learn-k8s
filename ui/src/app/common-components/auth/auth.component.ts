import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AppService } from '../../services/app.service';
import { UserService } from '../../services/user.service';

interface LoginUser {
  username: String;
  token: String;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  submissionInProgress: boolean = false;
  submissionFailedMsg: String = '';

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private appService: AppService,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.submissionInProgress = true;
    this.submissionFailedMsg = '';

    this.appService.login(this.loginForm.value)
      .pipe(
        finalize(() => this.submissionInProgress = false)
      )
      .subscribe((response: any) => {
        // Store User details
        this.userService.setUser(response);
        
        /**
         * Redirect or perform other actions
         * We are redirecting to '/orders' cause this is the only protected route in this sample app
         */
        this.router.navigate(['/orders']);
      }, error => {
        // Handle error
        this.submissionFailedMsg = error.error.msg;
        console.error('Login failed', error);
      });
  }
}
