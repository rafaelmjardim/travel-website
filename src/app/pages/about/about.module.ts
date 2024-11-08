import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        MatDialogModule,
        AboutComponent
    ]
})
export class AboutModule { }
