import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCheckService } from 'src/app/services/auth-check.service';
import { CustomToastrService, MessagePosition, MessageType } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(private toastr:CustomToastrService,public auth:AuthCheckService,private router:Router) {
    auth.checkIdentity();
  }

  signOut(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.auth.checkIdentity();
    this.router.navigate(['/login']);

    this.toastr.message("You've logged out","Info",{
      messageType:MessageType.Info,
      position:MessagePosition.BottomRight
    })
  }
}
