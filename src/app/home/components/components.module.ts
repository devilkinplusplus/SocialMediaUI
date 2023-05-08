import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UikitModule } from './uikit/uikit.module';
import { PostModule } from './post/post.module';
import { ProfileModule } from './profile/profile.module';
import { CommentModule } from './comment/comment.module';
import { ChatModule } from './chat/chat.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,MainModule,LoginModule,RegisterModule,UikitModule,PostModule,ProfileModule,CommentModule,ChatModule
  ]
})
export class ComponentsModule { }
