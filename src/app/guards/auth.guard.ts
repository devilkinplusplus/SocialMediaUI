import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomToastrService, MessagePosition, MessageType } from '../services/common/custom-toastr.service';
import { AuthCheckService, isAuthenticated } from '../services/auth-check.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private toastr: CustomToastrService,
    private auth:AuthCheckService
  ) {}

  //* route : ActivatedRouteSnapshot means which url we come from
  //* state : RouterStateSnapshot means which url we want to go
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    this.auth.checkIdentity();
    if (!isAuthenticated) {
      //! state.url getmek istenen componentin urldir
      this.router.navigate(['/login'],{ queryParams: { returnUrl : state.url }});

      this.toastr.message('You should sign in',"Oopss", {
        messageType: MessageType.Warning,
        position: MessagePosition.BottomRight,
      });
    }
    return true;
  }

}
