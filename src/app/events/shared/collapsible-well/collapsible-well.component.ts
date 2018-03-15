import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {


  visibile:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleContent(){
    this.visibile=!this.visibile;
  }

}
