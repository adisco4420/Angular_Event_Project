import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'app-event-list',
   templateUrl:'./event-list.component.html',
   styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:any[]

  constructor(private eventService: EventService, private toastr: ToastrService) {
    
   }
    
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
  
  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

  
}
