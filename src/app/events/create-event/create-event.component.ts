import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {

  }
  isDirty:boolean = true

  saveEvent(formValues){
    this.eventService.saveEvent(formValues)
    this.isDirty = false
    this.router.navigate(['/events'])
    
  }

  cancel(){
      this.router.navigate(['/events'])
  }
}
