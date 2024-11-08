import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations.component';


@NgModule({
    imports: [
        CommonModule,
        DestinationsRoutingModule,
        DestinationsComponent
    ]
})
export class DestinationsModule { }
