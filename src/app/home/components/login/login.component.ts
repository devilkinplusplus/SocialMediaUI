import { FacebookLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { AuthCheckService } from 'src/app/services/auth-check.service';
import { AuthService } from 'src/app/services/models/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService:AuthService,private spinner:NgxSpinnerService,
              private auth:AuthCheckService,private activeRoute: ActivatedRoute,private router:Router,
              private socialAuthService:SocialAuthService) {
    socialAuthService.authState.subscribe(async (user:SocialUser)=>{
      switch(user.provider){
        case "GOOGLE":
          await authService.googleLogin(user,()=>{
            auth.checkIdentity();
            activeRoute.queryParams.subscribe((params) => {
              const returnUrl: string = params['returnUrl'];
              if (returnUrl) {
                this.router.navigate([returnUrl])
              }else{
                this.router.navigate([''])
              }
            });
          })
          break;
        case "FACEBOOK":
          await authService.facebookLogin(user,()=>{
            auth.checkIdentity();
            activeRoute.queryParams.subscribe((params) => {
              const returnUrl: string = params['returnUrl'];
              if (returnUrl) {
                this.router.navigate([returnUrl])
              }else{
                this.router.navigate([''])
              }
            });
          })
          break;
      }
    })
  }

  facebookLogin(){
    //facebook sehifesini aç
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  async login(usernameOrEmail:string,password:string){
    this.spinner.show(SpinnerType.LineSpinClokwise);
    await this.authService.login(usernameOrEmail,password,()=>{
      this.auth.checkIdentity();

      this.activeRoute.queryParams.subscribe((params)=>{
        const returnUrl: string = params['returnUrl'];
        if (returnUrl) {
          this.router.navigate([returnUrl])
        }else{
          this.router.navigate([''])
        }
      })
    })

  }

  
}
