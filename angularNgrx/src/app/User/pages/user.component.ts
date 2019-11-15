import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <div class="container-field">
      <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4 class="title">LOGIN TO YOUR ACCOUNT</h4>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <router-outlet></router-outlet>
        </mat-card-content>
        </mat-card>
        </div>
        <div class="logo-container">
  <div class="logo">
    <img class="logo-img" src="assets/images/MezzoPly.png" />
    <div class="center-info">
      <h1>Welcome to MezzoPly</h1>
    </div>
  </div>
</div>
  `,
  styles: [`
  .container-field {
    max-width: 350px;
    position: fixed;
    right: 0;
    margin: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
  }
  :host .container-field > mat-card {
    width: 100%;
    height: 100%;
    align-content: center;
    place-content: center;
    z-index: 999 !important;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    -mox-box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
  :host mat-card-header {
    position: absolute;
    top: 10%;
    padding: 10px;
  }
  :host mat-card-content {
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    top: 25%;
    left: 12.5%;
  }
  .logo-img {
    position: absolute !important;
    left: 20px !important;
    max-width: 250px !important;
  }
  .center-info > h1 {
    color: #fff;
    position: relative;
    top: 100px;
    font-size: 42px;
    font-weight: 300;
    line-height: 1;
    padding: 40px;
  }
  `]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
