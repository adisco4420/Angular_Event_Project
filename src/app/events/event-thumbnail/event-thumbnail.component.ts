import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../shared/index';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:IEvent

  getStartTimeClass(){
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return {green : isEarlyStart, bold : isEarlyStart}
    if (this.event && this.event.time === '8:00 am') {
      return 'green bold'
    }
    else if (this.event && this.event.time === '10:00 am'){
        return 'red bold'
    }
    else{
      return 'blue bold'
    }
  }
  getStyle() {
    if(this.event && this.event.price === 400 ){
      return {'color': 'lightgreen'}
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
