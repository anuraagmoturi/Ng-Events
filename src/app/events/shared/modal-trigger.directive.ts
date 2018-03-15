import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from "./jQuery.service";

declare var jQuery:any;

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{

  private el:HTMLElement;
  @Input('appModalTrigger') modalId: string;


  constructor(@Inject(JQ_TOKEN) private $:any,
              private ref:ElementRef,
              ) {
    this.el = ref.nativeElement;
  }

  ngOnInit(){
    this.el.addEventListener('click',e=>{
      //$('#simple-modal').modal({});
      //this.$('#btnId').text('asdasd');
      this.$('#'+this.modalId).modal({});

    });

  }

}
