import { Injectable, Inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    @Inject('businessAuth') private businessAfAuth: AngularFireAuth,
    @Inject('communityAuth') private communityAfAuth: AngularFireAuth
  ) { }

  public get businessAuth(): AngularFireAuth {
    return this.businessAfAuth;
  }

  public get communityAuth(): AngularFireAuth {
    return this.communityAfAuth;
  }
}
