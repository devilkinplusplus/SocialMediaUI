import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PostModule } from '../post/post.module';
import { CommentModule } from '../comment/comment.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,MatTabsModule,PostModule,CommentModule,RouterModule,MatTooltipModule
  ]
})
export class ProfileModule { }
