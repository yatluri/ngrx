import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AppRouteConfig } from './app.route.config';
import 'hammerjs';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environment/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Mezzo ply',
      maxAge: 30,
      logOnly: !environment.production
    }),
    AppRouteConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
