import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigDialogComponent } from './sig-dialog.component';

import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    SigDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SigDialogModule { }
