import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user.routes";

import {userRoutes} from './user.routes';
import {UserProfileComponent} from "./user-profile.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations:[
    LoginComponent,
    UserProfileComponent

  ],
  providers:[

  ],
})

export class UserModule{}
