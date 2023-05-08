import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,MatTooltipModule,RouterModule
  ],
  exports:[
    ChatComponent
  ]
})
export class ChatModule { }
