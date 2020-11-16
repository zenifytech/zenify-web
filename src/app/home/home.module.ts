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
import { HomeSigninComponent } from './home-hero/home-signin/home-signin.component';
import { HomeSignupComponent } from './home-hero/home-signup/home-signup.component';
import { HomeFeaturesComponent } from './home-content/home-features/home-features.component';
import { HomePartnersComponent } from './home-content/home-partners/home-partners.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeContentComponent,
    HomeServicesComponent,
    HomeHeroComponent,
    HomeSigninComponent,
    HomeSignupComponent,
    HomeFeaturesComponent,
    HomePartnersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
