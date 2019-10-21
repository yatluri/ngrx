import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.getLoginFormGroup();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
  getLoginFormGroup(): FormGroup {
    return this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }
  onRegister() {}
}
