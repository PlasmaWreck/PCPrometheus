import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/Interfaces/iuser';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dService: DataService) { }
  Login(userToLogin:Iuser)
  {
    return this.dService.post("auth/login",userToLogin).toPromise();
  }

}
