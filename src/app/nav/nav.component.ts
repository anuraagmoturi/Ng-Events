import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user-profile/auth.service";
import {ISession} from "../events/shared/event.model";
import {EventService} from "../events/shared/event.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm: string ="";
  foundSessions:ISession[];

  constructor(private _authService:AuthService,
              private _eventService:EventService) {

  }

  searchSessions(searchTerm){
    this._eventService.searchSessions(searchTerm).subscribe(sessions =>{
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      });
  }

  ngOnInit() {
  }



}
