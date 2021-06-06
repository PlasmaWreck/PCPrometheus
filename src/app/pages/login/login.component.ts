import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GetService } from 'src/app/service/Get/get.service';
import { LoginService } from 'src/app/service/Login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  constructor(private FormBuilder: FormBuilder, private lservice: LoginService, private gService: GetService) { }

  ngOnInit(): void {
    this.LoginForm = this.FormBuilder.group({
      Email: new FormControl('',Validators.required),
      Password: new FormControl('',[Validators.required, Validators.minLength(2)])
    })
  }

  submitForm(){
    if(this.LoginForm.invalid){
      alert("no go")
    }else{
      alert("okay")
      // this.lservice.signIn(this.LoginForm.value)
      this.lservice.Login(this.LoginForm.value).then(
        (res:any)=>{
          localStorage.setItem("token",res.token);
          console.log(res);
        }
      )
      this.LoginForm.reset();
    }
  }
  clickMe(){
    this.gService.getList().then(
      (res:any)=>{
        console.log(res);
      }
    )
  }

  LogOut(){
    localStorage.removeItem("token");
    console.log("You've logged out")
  }

}
