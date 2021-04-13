import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/Interfaces/iuser';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedInBool: boolean = false;

  constructor(private dService: DataService) { }
  Login(userToLogin:Iuser)
  {
    return this.dService.post("auth/login",userToLogin).toPromise();
  }
  getList()
  {
    return this.dService.get("userinfo").toPromise();
  }


  setLoginBool(loginValue:any)
  {
    if(loginValue != null)
    {
      this.loggedInBool = true;
    }else{
      this.loggedInBool = false;
    }
  }

  getLoginBool()
  {
    return this.loggedInBool;
  }

}
