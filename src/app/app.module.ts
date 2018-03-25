import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';


import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
