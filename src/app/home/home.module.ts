import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SharedModule } from '../shared/shared.module';
import { HomeServicesComponent } from './home-content/home-services/home-services.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomePartnersComponent } from './home-content/home-partners/home-partners.component';
import { HomeAboutComponent } from './home-content/home-about/home-about.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeContentComponent,
    HomeServicesComponent,
    HomeHeroComponent,
    HomePartnersComponent,
    HomeAboutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
