import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/components/main/main.component';
import { LoginComponent } from './home/components/login/login.component';
import { RegisterComponent } from './home/components/register/register.component';
import { LayoutComponent } from './home/layout/layout.component';
import { ExploreComponent } from './home/components/uikit/explore/explore.component';
import { ProfileComponent } from './home/components/profile/profile.component';
import { ProfileSettingsComponent } from './home/components/profile/profile-settings/profile-settings.component';
import { NewsComponent } from './home/components/uikit/news/news.component';
import { RanksComponent } from './home/components/uikit/ranks/ranks.component';
import { UserEditComponent } from './home/components/profile/user-edit/user-edit.component';
import { ChatComponent } from './home/components/chat/chat.component';
import { UserDetailComponent } from './home/components/uikit/user-detail/user-detail.component';

const routes: Routes = [
  { path: '' , component: LayoutComponent,
    children:[
      { path: '', component : MainComponent, pathMatch:'full'},
      { path: "explore" , component : ExploreComponent },
      { path: 'news' , component:NewsComponent},
      { path: 'ranks' , component:RanksComponent},
      { path: 'profile' , component:ProfileComponent },
      { path: 'settings', component:ProfileSettingsComponent },
      { path: 'me', component:UserEditComponent},
      { path: 'chat', component:ChatComponent },
      { path: 'user', component:UserDetailComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
