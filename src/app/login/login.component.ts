import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication';
import { transition, trigger, useAnimation } from '@angular/animations';
import { zoomIn } from 'ng-animate/lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginAnimation', [transition('void => *', useAnimation(zoomIn), {
      // Set the duration to 5seconds and delay to 2seconds
      params: {timing: 1, delay: 0}
    })])]
})
export class LoginComponent implements OnInit {

  loginError = '';
  loginFormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.logout();
  }

  login() {
    this.loginError = '';
    this.authenticationService
      .login(this.loginFormGroup.get('username').value, this.loginFormGroup.get('password').value)
      .subscribe(
        data => {
          if (data.success) {
            const user = data;
            if (user && user.token) {
              this.router.navigate(['/app']);
              sessionStorage.setItem('SESSIONID', JSON.stringify(user));
            } else {
              this.failedToLogin();
            }
          } else {
            this.failedToLogin();
          }
        },
        error => {
          this.failedToLogin();
        });

  }

  failedToLogin() {
    this.loginError = 'Wrong username or password.';
  }

  ngOnInit() {
  }


}
