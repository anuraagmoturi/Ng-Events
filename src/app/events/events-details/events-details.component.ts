import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IEvent, ISession} from "../shared/event.model";

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  event: IEvent;
  addMode:boolean;
  filterBy : string = "all";
  sortBy: string = "votes";


  constructor(private _eventService:EventService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this._activatedRoute.params.forEach((params:Params)=>{
      this.event = this._eventService.getEvent(+params['id']);
      this.addMode =false;
    });

    // this.event=this._eventService.getEvent(
    //   +this._activatedRoute.snapshot.params['id']);
  }

  addSession(){
    this.addMode=true;
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
    session.id = nextId+1;
    this.event.sessions.push(session);
    this._eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(){
    this.addMode=false;
  }

}
