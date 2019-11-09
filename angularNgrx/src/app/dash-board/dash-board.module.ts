import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';

import { DashBoardRouteConfig } from './dash-board.route.config';

// components
import { DashBoardComponent } from './pages/dash-board.component';

import { loginReducer } from '@shared/state/login.reducer';

@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    StoreModule.forFeature('login', loginReducer),
    SharedModule,
    DashBoardRouteConfig
  ],
  exports: [SharedModule, DashBoardRouteConfig]
})
export class DashBoardModule {}
