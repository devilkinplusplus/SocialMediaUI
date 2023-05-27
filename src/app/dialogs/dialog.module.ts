import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowRolesDialogComponent } from './admin/show-roles-dialog/show-roles-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    ShowRolesDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports:[
    ShowRolesDialogComponent,
  ]
})
export class DialogModule { }
