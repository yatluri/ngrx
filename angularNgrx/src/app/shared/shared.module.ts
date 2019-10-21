import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {GestureConfig} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
  exports: [FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}]
    };
  }
}
