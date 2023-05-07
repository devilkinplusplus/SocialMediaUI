import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PostModule } from '../post/post.module';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,MatTabsModule,PostModule,CommentModule
  ]
})
export class ProfileModule { }
