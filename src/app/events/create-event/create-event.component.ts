import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../shared/event.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true
  event:any = { location: { } }

  constructor(private router: Router, private eventService:EventService) {

  }

  ngOnInit(){

  }
  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.router.navigate(['/events'])
    this.isDirty = false
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}

//   isDirty:boolean = true;
//   constructor(private _router:Router,private _eventService:EventService) { }
//
//   ngOnInit() {
//   }
//
//   saveEvent(formValues){
//     //console.log(formValues);
//     this._eventService.saveEvent(formValues);
//     this.isDirty=false;
//     this._router.navigate(['/events']);
//
//   }
//
//   cancel(){
//     this._router.navigate(['/events']);
//   }
//
// }

