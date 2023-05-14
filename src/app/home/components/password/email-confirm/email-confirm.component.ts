import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/enums/spinnerType';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';
import { AuthService } from 'src/app/services/models/auth.service';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss']
})
export class EmailConfirmComponent {
  constructor(private authService:AuthService,private spinner:NgxSpinnerService,private toastr:CustomToastrService,
              private router:Router){}

  confirmEmail(email:string){
    this.spinner.show(SpinnerType.SquareJellyBox);

    this.authService.passwordReset(email,()=>{
      this.spinner.hide(SpinnerType.SquareJellyBox);
      this.toastr.message("Check your mail","Mail sent",{
        messageType:MessageType.Success,
        position:MessagePosition.BottomRight
      })
      this.router.navigate(['/'])
    });

  }

}
