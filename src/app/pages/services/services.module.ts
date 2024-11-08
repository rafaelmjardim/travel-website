import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

@NgModule({
    imports: [
        CommonModule,
        ServicesRoutingModule,
        ServicesComponent
    ]
})
export class ServicesModule { }
