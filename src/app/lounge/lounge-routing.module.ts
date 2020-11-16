import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from '../shared/services/authentication-guard.service';
import { LoungeComponent } from './lounge.component';


const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: LoungeComponent,
    canActivate: [AuthenticationGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoungeRoutingModule { }
