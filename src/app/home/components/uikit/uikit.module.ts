import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { BadgesComponent } from './badges/badges.component';
import { RequestsComponent } from './requests/requests.component';
import { SuggestedsComponent } from './suggesteds/suggesteds.component';
import { ExploreComponent } from './explore/explore.component';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { RanksComponent } from './ranks/ranks.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PostModule } from '../post/post.module';
import { CommentModule } from '../comment/comment.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HelpComponent } from './help/help.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    SettingsComponent,
    BadgesComponent,
    RequestsComponent,
    SuggestedsComponent,
    ExploreComponent,
    NewsComponent,
    RanksComponent,
    UserDetailComponent,
    HelpComponent,
    FollowersComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule,
    MatTabsModule,
    PostModule,
    CommentModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  exports:[
    SettingsComponent,
    BadgesComponent,
    RequestsComponent,
    SuggestedsComponent,
    ExploreComponent,
    NewsComponent,
    RanksComponent,
    UserDetailComponent,
    HelpComponent,
    FollowersComponent
  ]
})
export class UikitModule { }
