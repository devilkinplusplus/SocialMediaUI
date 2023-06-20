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

  getTokenRoles(): string[] {
    const token: string | null = localStorage.getItem('accessToken');
    const tokenPayload: any = this.jwtHelper.decodeToken(token);
    const roles: string[] = tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ?? [];
    return roles;
  }

  getIdFromToken(): string{
    const token: string | null = localStorage.getItem('accessToken');
    const tokenPayload: any = this.jwtHelper.decodeToken(token);
    const id : string = tokenPayload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    return id;
  }

  hasAdminRole(): boolean {
    const roles: string[] = this.getTokenRoles();
    return roles.includes('Admin');
  }

  get isUserAuthenticated():boolean{
    return isAuthenticated;
  }

}

//* Global variable for checking if user authenticated
export let isAuthenticated: boolean;
