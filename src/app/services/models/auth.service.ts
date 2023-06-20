import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { TokenResponse } from 'src/app/contracts/auth/tokenResponse';
import { Observable, firstValueFrom } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, MessagePosition, MessageType } from '../common/custom-toastr.service';
import { Router } from '@angular/router';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient:HttpClientService,private spinner:NgxSpinnerService,private toastr:CustomToastrService,
              private router :Router) { }

  async login(usernameOrEmail:string,password:string, callBack?:()=>void):Promise<any>{
    const obs : Observable<any | TokenResponse> = this.httpClient.post<any | TokenResponse>({
      controller:"auth"
    },{
      usernameOrEmail,password
    })
    const response : TokenResponse =  await firstValueFrom(obs) as TokenResponse;

    if(response.succeeded){
      localStorage.setItem('accessToken', response.token.accessToken);
      localStorage.setItem('refreshToken',response.token.refreshToken);
      callBack();
      this.spinner.hide(SpinnerType.LineSpinClokwise);
      this.router.navigate([''])
    }else{
      this.spinner.hide(SpinnerType.LineSpinClokwise);
      for (const error of response.errors) {
        this.toastr.message(error,"Error",{
          messageType:MessageType.Error,
          position:MessagePosition.BottomRight
        })
      }
    }
  }

  async googleLogin(user:SocialUser,callBack?:()=>void) : Promise<any>{
    const observable : Observable<TokenResponse | SocialUser> = this.httpClient.post<SocialUser | TokenResponse>({
      controller:"auth",
      action:"googleLogin"
    },user);

    this.spinner.show(SpinnerType.LineSpinClokwise);

   const token : TokenResponse = await firstValueFrom(observable) as TokenResponse;
   if(token.token){
      localStorage.setItem('accessToken', token.token.accessToken);
      localStorage.setItem('refreshToken', token.token.refreshToken);
      callBack();
    }
   this.spinner.hide(SpinnerType.LineSpinClokwise);
  }

  async facebookLogin(user:SocialUser,callBack?:()=>void) : Promise<any>{
    const observable : Observable<TokenResponse | SocialUser> = this.httpClient.post<SocialUser | TokenResponse>({
      controller:"auth",
      action:"facebookLogin"
    },user);

    this.spinner.show(SpinnerType.LineSpinClokwise);
    const res :TokenResponse = await firstValueFrom(observable) as TokenResponse;

    if(res.token){
      localStorage.setItem("accessToken",res.token.accessToken);
      localStorage.setItem("refreshToken",res.token.refreshToken);
      callBack();
    }
    this.spinner.hide(SpinnerType.LineSpinClokwise);
  }

  async refreshTokenLogin(refreshToken:string,errorCallBack?:()=>void){
    const observable : Observable<any | TokenResponse> = this.httpClient.post<any | TokenResponse>({
      controller:"auth",
      action:"refreshTokenLogin"
    },{ refreshToken : refreshToken });

    const tokenResponse : TokenResponse =  (await firstValueFrom(observable)) as TokenResponse;
    if(tokenResponse){
      localStorage.setItem("accessToken",tokenResponse.token.accessToken);
      localStorage.setItem("refreshToken",tokenResponse.token.refreshToken);
    }else{
      errorCallBack();
    }

  }

  async passwordReset(email: string, callBackFunction?: () => void) {
    const observable: Observable<any> = this.httpClient.post({
      controller: "auth",
      action: "passwordReset"
    }, { email: email });

    await firstValueFrom(observable);
    callBackFunction();
  }

  async verifyResetToken(resetToken: string, userId: string, callBackFunction?: () => void): Promise<boolean> {
    const observable: Observable<any> = this.httpClient.post({
      controller: "auth",
      action: "verifyResetToken"
    }, {
      resetToken: resetToken,
      userId: userId
    });

    const state: boolean = await firstValueFrom(observable);
    callBackFunction();
    return state;
  }

}
