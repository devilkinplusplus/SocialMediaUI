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

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
      { provide: 'baseUrl', useValue: 'https://localhost:7134/api', multi: true },
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
    ]
})
export class AppModule { }
