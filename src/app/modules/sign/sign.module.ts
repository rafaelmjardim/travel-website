import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";


import { ReactiveFormsModule } from '@angular/forms';
import { SignDialogComponent } from './sign-dialog/sign-dialog.component'


@NgModule({
  declarations: [
    SignComponent,
    SignDialogComponent
  ],
  imports: [
    CommonModule,
    SignRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SignModule { }
