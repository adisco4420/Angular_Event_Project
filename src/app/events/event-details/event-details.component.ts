import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEvent } from '../shared/index';

import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:IEvent

  constructor(private eventService : EventService,
              private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }
}
