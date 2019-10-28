import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserRouteConfig } from './user.route.config';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';

// reducers
import { loginReducer } from '@shared/state/login.reducer';

// components
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    StoreModule.forFeature('login', loginReducer),
    UserRouteConfig
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    UserRouteConfig
  ]
})
export class UserModule {}
