import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone, PLATFORM_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ZenifyHttpInterceptor } from './shared/http-interceptor';
import { environment } from 'src/environments/environment';
import { BusinessFireAuthFactory, CommunityFireAuthFactory } from './app-firebase-factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ZenifyHttpInterceptor,
      multi: true
    },
    {
      provide: 'env',
      useValue: environment
    },
    {
      provide: 'businessAuth',
      deps: [PLATFORM_ID, NgZone],
      useFactory: BusinessFireAuthFactory
    },
    {
      provide: 'communityAuth',
      deps: [PLATFORM_ID, NgZone],
      useFactory: CommunityFireAuthFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
