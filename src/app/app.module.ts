import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  EventListResolver,
  EventRouteActivator,
  SessionListComponent,
  DurationPipe,
} from './events/index'

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { Error404Component } from './errors/404.component';

import { TOASTR_TOKEN ,Toastr } from './common/toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

import { AuthService } from './user/auth.service';

import { appRoutes } from './routes';

declare let toastr : Toastr

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe

  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide:'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty){
    return window.confirm('You are not saved this event do you want to cancel')
    // toastr.warning('save the event')
  }
    return true
}