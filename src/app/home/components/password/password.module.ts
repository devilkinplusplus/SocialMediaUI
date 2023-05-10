import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailConfirmComponent } from './email-confirm/email-confirm.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    EmailConfirmComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmailConfirmComponent,ChangePasswordComponent
  ]
})
export class PasswordModule { }
