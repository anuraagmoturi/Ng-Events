import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService:AuthService,
              private _router:Router) { }

  ngOnInit() {
  }

  login(formValues){
    this._authService.loginUser(formValues.userName,
      formValues.password);
    this._router.navigate(['user/profile']);
  }

  cancel(){
    this._router.navigate(['events']);
  }
}
