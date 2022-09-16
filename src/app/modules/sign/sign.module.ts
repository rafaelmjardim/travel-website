import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SignModule { }
