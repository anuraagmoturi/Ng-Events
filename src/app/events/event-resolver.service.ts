import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {EventService} from "./shared/event.service";
import 'rxjs/add/operator/map'


@Injectable()
export class EventResolverService implements Resolve<any>{

  constructor(private _eventService:EventService) { }

  resolve(){
    return this._eventService.getEvents().map(events=>events);
  }
}
