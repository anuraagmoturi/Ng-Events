import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import {ToastModule} from "ng2-toastr";
import {TOASTR_TOKEN, Toastr} from "./events/shared/toastr.service";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";



import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { NavComponent } from './nav/nav.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import {EventService} from "./events/shared/event.service";
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import {appRoutes} from "../routes";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivatorGuard} from "./events/events-details/event-route-activator.guard";
import { CreateEventComponent } from './events/create-event/create-event.component';
import {EventResolverService} from "./events/event-resolver.service";
import {AuthService} from "./user-profile/auth.service";
import { CreateSessionComponent } from './events/events-details/create-session/create-session.component';
import { SessionListComponent } from './events/events-details/session-list/session-list.component';
import {UserModule} from "./user-profile/user.module";
import { CollapsibleWellComponent } from './events/shared/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import {LoginComponent} from "./user-profile/login/login.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

import {JQ_TOKEN} from "./events/shared/jQuery.service";
import { SimpleModalComponent } from './events/shared/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './events/shared/modal-trigger.directive';
import { UpvoteComponent } from './events/events-details/upvote/upvote.component';
import {VoterService} from "./events/events-details/voter.service";
import { LocationValidatorDirective } from './events/shared/location-validator.directive';

let toastr : any;
declare let jQuery:Object;

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NavComponent,
    EventThumbnailComponent,
    EventsDetailsComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],

  imports: [
    BrowserModule,BrowserAnimationsModule,ToastModule.forRoot(),
    UserModule,
    RouterModule.forRoot([
      { path: 'events/new', component: CreateEventComponent,
        canDeactivate:['canDeactiveCreateEvent'] },
      { path: 'events', component: EventsComponent,
        resolve:{events:EventResolverService}
      },
      { path: 'events/:id', component: EventsDetailsComponent,
        canActivate:[EventRouteActivatorGuard] },
      { path:'events/session/new', component:CreateSessionComponent },
      { path: '404', component: Error404Component },
      { path: '', redirectTo: '/events', pathMatch:'full' },
      // { path:'user', loadChildren: 'app/user-profile/user.module#UserModule' }
      {path:'user/login', component:LoginComponent},
      {path:'user/profile', component:UserProfileComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivatorGuard,
    AuthService,
    EventResolverService,
    {
      provide:'canDeactiveCreateEvent', useValue:checkDirtyState
    },
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
