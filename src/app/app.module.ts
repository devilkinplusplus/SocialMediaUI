import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { DialogModule } from './dialogs/dialog.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HomeModule,
        AdminModule,
        NgxSpinnerModule,
        ToastrModule.forRoot(),
        JwtModule.forRoot({
          config: {
            tokenGetter: () => localStorage.getItem('accessToken'),
            allowedDomains: ['localhost:7134'],
          },
        }),
        SocialLoginModule,
        DialogModule
    ],
    providers: [
      { provide: 'baseUrl', useValue: 'https://localhost:7134/api', multi: true },
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider(
                '434833922614-sqqtja89h8td1nisv5t0jkcodc5prcl6.apps.googleusercontent.com'
              )
            },
            {
              id:FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider("1208032053418369")
            }
          ],
          onError: (err) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      },
    ],
})
export class AppModule { }
