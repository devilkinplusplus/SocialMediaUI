import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { BadgesComponent } from './badges/badges.component';
import { RequestsComponent } from './requests/requests.component';
import { SuggestedsComponent } from './suggesteds/suggesteds.component';



@NgModule({
  declarations: [
    SettingsComponent,
    BadgesComponent,
    RequestsComponent,
    SuggestedsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SettingsComponent,
    BadgesComponent,
    RequestsComponent,
    SuggestedsComponent
  ]
})
export class UikitModule { }
