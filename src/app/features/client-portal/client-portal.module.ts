import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';

import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

@NgModule({
  declarations: [
    ClientLoginComponent,
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    ClientLoginComponent,
    ClientDashboardComponent
  ]
})
export class ClientPortalModule { }