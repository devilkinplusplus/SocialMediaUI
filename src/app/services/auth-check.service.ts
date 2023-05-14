import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthCheckService {
  constructor(private jwtHelper: JwtHelperService) {}

  checkIdentity() {
    const token: string = localStorage.getItem('accessToken');
    let isExpired: boolean;

    try {
      isExpired = this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      //! gerçək token deyilsə expired say
      isExpired = true;
    }

    isAuthenticated = token != null && !isExpired;
  }

  get isUserAuthenticated():boolean{
    return isAuthenticated;
  }

}

//* Global variable for checking if user authenticated
export let isAuthenticated: boolean;
