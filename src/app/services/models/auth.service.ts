import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { TokenResponse } from 'src/app/contracts/auth/tokenResponse';
import { Observable, firstValueFrom } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, MessagePosition, MessageType } from '../common/custom-toastr.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient:HttpClientService,private spinner:NgxSpinnerService,private toastr:CustomToastrService,
              private router :Router) { }

  async login(usernameOrEmail:string,password:string, callBack?:()=>void ){
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


}
