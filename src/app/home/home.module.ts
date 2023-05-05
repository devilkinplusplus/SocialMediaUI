import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,LayoutModule,ComponentsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class HomeModule { }
