import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SignDialogComponent } from './sign-dialog/sign-dialog.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        CommonModule,
        SignRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        SignComponent,
        SignDialogComponent,
    ]
})
export class SignModule { }
