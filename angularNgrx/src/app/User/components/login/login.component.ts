import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.getLoginFormGroup();
  constructor(
    private fb: FormBuilder,
    private routerService: Router,
    private ngrxStore: Store<any>
  ) {}

  ngOnInit() {
    this.ngrxStore.pipe(select('login')).subscribe(userPayLoad => {
      if (typeof userPayLoad !== 'undefined' && userPayLoad !== null) {
      userPayLoad.hasOwnProperty('isUserLoggedIn') ?
       this.afterLogin(userPayLoad) : this.onRegister(userPayLoad);
      }
    });
  }
  getLoginFormGroup(): FormGroup {
    return this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
      ]
    });
  }
  dispatchRegister() {
    this.ngrxStore.dispatch({
      type: 'IS_USER_REGISTERED',
      payload: false
    });
  }
  onRegister(payload) {
 if (!payload.isUserRegistered) {
   this.routerService.navigate(['/user/registration-page']);
 }
  }
  dispatchLogin(): void {
    this.ngrxStore.dispatch({
      type: 'IS_USER_LOGGED_IN',
      payload:
        this.loginForm.get('Email').value === '123@gmail.com' &&
        this.loginForm.get('Password').value === '123456'
    });
  }
  afterLogin(loginPayLoad: any): void {
    if (loginPayLoad.isUserLoggedIn) {
      this.routerService.navigate(['/dash-board/']);
    }
  }
}
