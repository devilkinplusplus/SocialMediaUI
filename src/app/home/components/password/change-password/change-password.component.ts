import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';
import { AuthService } from 'src/app/services/models/auth.service';
import { SpinnerType } from '../../../../enums/spinnerType';
import { UserService } from 'src/app/services/models/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  constructor(private authService:AuthService,private spinner:NgxSpinnerService,private toastr:CustomToastrService,
              private activatedRoute:ActivatedRoute,private userService:UserService,private router:Router) { }

  state : boolean;

  ngOnInit() {
    this.spinner.show(SpinnerType.SquareJellyBox);
    this.activatedRoute.params.subscribe({
      next: async params => {
         this.state = await this.authService.verifyResetToken(params['resetToken'],params['userId'],()=>{
          this.spinner.hide(SpinnerType.SquareJellyBox);
        })
      }
    })
    this.spinner.hide(SpinnerType.SquareJellyBox);

  }

  async resetPassword(password:string,passwordConfirm:string){
    this.spinner.show(SpinnerType.SquareJellyBox);

    if(password != passwordConfirm){
      this.spinner.hide(SpinnerType.SquareJellyBox);
      this.toastr.message("Confirm your password","Error",{
        messageType:MessageType.Error,
        position:MessagePosition.BottomRight
      })
      return;
    }

    this.activatedRoute.params.subscribe({
      next: async params => {
        await this.userService.updatePassword(params['userId'],params['resetToken'],password,()=>{
          this.toastr.message("Password updated successfully","Success",{
            messageType:MessageType.Success,
            position:MessagePosition.BottomRight
          })

          this.router.navigate(["/login"])
        },error=>{
          console.log(error);
        });
        this.spinner.hide(SpinnerType.SquareJellyBox);
      }
    })

  }

}
