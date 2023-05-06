import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,ComponentsModule,MatDividerModule,RouterModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
