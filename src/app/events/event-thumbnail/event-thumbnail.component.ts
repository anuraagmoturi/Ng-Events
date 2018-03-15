import { Component, Input } from '@angular/core';
import {IEvent} from "../shared/event.model";

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

  @Input() event:IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return 'green bold';
      //return ['green','bold'];
      //return {color: 'red', 'font-weight': 'bold'};
    //return [];
    //return {};
    return ''
  }

  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }

}
