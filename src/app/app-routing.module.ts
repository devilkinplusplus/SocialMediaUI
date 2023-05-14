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
import { EmailConfirmComponent } from './home/components/password/email-confirm/email-confirm.component';
import { ChangePasswordComponent } from './home/components/password/change-password/change-password.component';
import { HelpComponent } from './home/components/uikit/help/help.component';
import { LayoutComponent as LayoutAdmin } from './admin/layout/layout.component';

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
      { path: 'user', component:UserDetailComponent},
      { path: 'help', component:HelpComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm', component: EmailConfirmComponent},
  { path: 'changePassword/:userId/:resetToken', component: ChangePasswordComponent},

  //! Admin
  {
    path: 'admin' ,component:LayoutAdmin,
  },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
