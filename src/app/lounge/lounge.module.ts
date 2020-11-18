import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoungeRoutingModule } from './lounge-routing.module';
import { LoungeComponent } from './lounge.component';
import { SharedModule } from '../shared/shared.module';
import { LoungeHeaderComponent } from './lounge-header/lounge-header.component';
import { LoungeFooterComponent } from './lounge-footer/lounge-footer.component';
import { LoungeProjectsComponent } from './lounge-projects/lounge-projects.component';
import { LoungeUpdatesComponent } from './lounge-updates/lounge-updates.component';
import { LoungeAssociatesComponent } from './lounge-associates/lounge-associates.component';
import { LoungeCalendarComponent } from './lounge-calendar/lounge-calendar.component';


@NgModule({
  declarations: [
    LoungeComponent,
    LoungeHeaderComponent,
    LoungeFooterComponent,
    LoungeProjectsComponent,
    LoungeUpdatesComponent,
    LoungeAssociatesComponent,
    LoungeCalendarComponent
  ],
  imports: [
    CommonModule,
    LoungeRoutingModule,
    SharedModule
  ]
})
export class LoungeModule { }
