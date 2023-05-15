import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCheckService } from 'src/app/services/auth-check.service';
import { CustomToastrService } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private toastr:CustomToastrService,public auth:AuthCheckService,private router:Router) {
    auth.checkIdentity();
  }
}
