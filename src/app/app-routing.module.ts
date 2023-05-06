import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/components/main/main.component';
import { LoginComponent } from './home/components/login/login.component';
import { RegisterComponent } from './home/components/register/register.component';
import { LayoutComponent } from './home/layout/layout.component';
import { ExploreComponent } from './home/components/uikit/explore/explore.component';

const routes: Routes = [
  { path: '' , component: LayoutComponent,
    children:[
      { path: '', component : MainComponent, pathMatch:'full'},
      { path: "explore" , component : ExploreComponent }
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
