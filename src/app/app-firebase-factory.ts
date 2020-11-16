import { NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

export function BusinessFireAuthFactory(platformId: Object, zone: NgZone) {
    return new AngularFireAuth(environment.configs.firebaseBusiness, 'business-auth', platformId, zone);
  }

  export function CommunityFireAuthFactory(platformId: Object, zone: NgZone) {
    return new AngularFireAuth(environment.configs.firebaseCommunity, 'community-auth', platformId, zone);
  }