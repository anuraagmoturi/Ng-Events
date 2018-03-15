import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {TOASTR_TOKEN, Toastr} from "../events/shared/toastr.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm:FormGroup;
  constructor(private _authService:AuthService,
              private _router:Router,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  private firstName:FormControl;
  private lastName:FormControl;

  ngOnInit() {
     this.firstName = new FormControl(this._authService.currentUser.firstName,
       [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._authService.currentUser.lastName,Validators.required);
    this.profileForm = new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    });
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this._authService.updateCurrentUser(formValues.firstName,formValues.lastName);
      //this.toastr.success('Profile Saved');
      this._router.navigate(['events']);
    }

  }

  cancel(){
    this._router.navigate(['events']);
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched

  }

}
