import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.getLoginFormGroup();
  constructor(private fb: FormBuilder, private routerService: Router) {}

  ngOnInit() {}
  getLoginFormGroup(): FormGroup {
    return this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)]
      ]
    });
  }
  onRegister() {}
  onLogin() {
    if (
      this.loginForm.get('Email').value === '123@gmail.com' &&
      this.loginForm.get('Password').value === '123456'
    ) {
      this.routerService.navigate(['/dash-board/dash-board-view']);
    }
  }
}
