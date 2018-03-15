import {Component, OnInit, ViewContainerRef} from '@angular/core';
import  {EventService} from "./shared/event.service";
import {ToastsManager} from "ng2-toastr";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "./shared/event.model";

@Component({
  // selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: IEvent[];
  constructor(private _eventService: EventService, private _toaster:ToastsManager,private _vcr:ViewContainerRef,
  private _route:ActivatedRoute){
    this._toaster.setRootViewContainerRef(_vcr);
  }

  ngOnInit(){
    // this._eventService.getEvents().subscribe( events =>{
    //   this.events=events;
    //   });

    //resolve from routes
    this.events = this._route.snapshot.data['events'];

    this._toaster.success('Welcome to Events');
  }

  // handleThumbnailClick(eventName){
  //   //this._toasterService.success(eventName);
  //   this._toaster.success(eventName);
  // }
}
