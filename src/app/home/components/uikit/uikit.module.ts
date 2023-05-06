import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { BadgesComponent } from './badges/badges.component';
import { RequestsComponent } from './requests/requests.component';
import { SuggestedsComponent } from './suggesteds/suggesteds.component';
import { ExploreComponent } from './explore/explore.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SettingsComponent,
    BadgesComponent,
    RequestsComponent,
    SuggestedsComponent,
    ExploreComponent
  ],
  imports: [
    CommonModule,MatDividerModule,RouterModule
  ],
  exports:[
    SettingsComponent,
    BadgesComponent,
    RequestsComponent,
    SuggestedsComponent,
    ExploreComponent
  ]
})
export class UikitModule { }
