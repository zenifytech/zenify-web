import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoungeRoutingModule } from './lounge-routing.module';
import { LoungeComponent } from './lounge.component';
import { SharedModule } from '../shared/shared.module';
import { LoungeHeaderComponent } from './lounge-header/lounge-header.component';
import { LoungeFooterComponent } from './lounge-footer/lounge-footer.component';


@NgModule({
  declarations: [LoungeComponent, LoungeHeaderComponent, LoungeFooterComponent],
  imports: [
    CommonModule,
    LoungeRoutingModule,
    SharedModule
  ]
})
export class LoungeModule { }
