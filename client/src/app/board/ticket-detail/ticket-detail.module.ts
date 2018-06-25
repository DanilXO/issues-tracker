import {TicketDetailEpic} from "./context/epics";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TicketDetailComponent} from "./ticket-detail.component";
import {RouterModule} from "@angular/router";
import {NotificationModule} from "../../notification/notification.module";

@NgModule({
  imports: [CommonModule,RouterModule,NotificationModule],
  declarations: [TicketDetailComponent],
  providers: [TicketDetailEpic],
  exports: [TicketDetailComponent]
})
export class TicketDetailModule {}
