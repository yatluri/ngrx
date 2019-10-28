import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-dash-board',
  template: `
    <mat-sidenav-container class="example-container">
      <mat-sidenav #sidenav mode="side" opened>
        <ul class="icon-lists">
          <li>
            <mat-icon aria-hidden="false" aria-label="Example home icon"
              >home</mat-icon
            >
          </li>
          <li>
            <mat-icon
              aria-hidden="false"
              aria-label="example power setting"
              (click)="onSignOff()"
              >power_settings_new</mat-icon
            >
          </li>
        </ul>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .example-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      :host mat-icon {
        cursor: pointer;
      }
      ul {
        padding: 10px;
      }
      ul > li {
        list-style: none;
        padding: 0px;
      }
    `
  ]
})
export class DashBoardComponent implements OnInit {
  constructor(private routerService: Router, private store: Store<any>) {}
  ngOnInit() {
    this.store.pipe(select('login')).subscribe(loginPayload => {
      if (loginPayload) {
        this.signOff(loginPayload);
      }
    });
  }
  onSignOff() {
    this.store.dispatch({
      type: 'IS_USER_LOGGED_IN',
      payload: false
    });
  }
  signOff(loginPayload) {
    if (!loginPayload.isUserLoggedIn) {
      this.routerService.navigate(['/user/login']);
    }
  }
}
