import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import {UserProfileComponent} from "./user-profile.component";
import {LoginComponent} from "./login/login.component";



export const userRoutes = [
  {path:'login', component:LoginComponent},
  {path:'profile', component:UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports:[RouterModule]
})

export class UserRoutingModule{}


