import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../Login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private lService: LoginService, private router: Router, private jwtHelper: JwtHelperService) { }

  canActivate()
  {
    const token:string = localStorage.getItem("token")!;
    console.log(token);

    if(token && !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }else{
      localStorage.removeItem("token");
      this.router.navigate(['']);
      return false;
    }
  }
  // canActivate()
  // {
  //   const loggedInValue = this.lService.getLoginBool();

  //   if(loggedInValue === false)
  //   {
  //     this.router.navigate(['']);
  //     return false;
  //   }else{
  //     return true;
  //   }
  // }
}
