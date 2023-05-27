import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CustomToastrService, MessagePosition, MessageType } from '../services/common/custom-toastr.service';
import { AuthCheckService, isAuthenticated } from '../services/auth-check.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router,private toastr:CustomToastrService,private auth:AuthCheckService) {
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    this.auth.checkIdentity();
    if (!isAuthenticated) {
      //! state.url getmek istenen componentin urldir
      this.router.navigate(['/login'],{ queryParams: { returnUrl : state.url }});

      this.toastr.message('You should sign in',"Oopss", {
        messageType: MessageType.Warning,
        position: MessagePosition.BottomRight,
      });
    }

    if(!this.auth.hasAdminRole()){
      //TODO Navigate 401 page
      return false;
    }

    return true;
  }

}
