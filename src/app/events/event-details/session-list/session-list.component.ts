import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession, restrictedWords } from '../../shared/index';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions:ISession[]
  @Input() filterBy: string;
  visibleSessions:ISession[] = [];
  constructor() { }

  ngOnInit() {
  }
ngOnChanges(){
  if(this.sessions){
    this.filterSession(this.filterBy)
  }
}
filterSession(filter){
  if(filter === 'all'){
    this.visibleSessions = this.sessions.slice(0)
  }else {
    this.visibleSessions = this.sessions.filter(sessions =>{
      return sessions.level.toLowerCase()  === filter;
    })
  }
}

}
