import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmailConfirmComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    EmailConfirmComponent,ChangePasswordComponent
  ]
})
export class PasswordModule { }
