import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {CreateTicketComponent} from "./create-ticket.component";
import {CreateTicketEpics} from "./context/epics";

@NgModule({
  imports: [FormsModule, CommonModule],
  providers: [CreateTicketEpics],
  declarations: [CreateTicketComponent],
  exports: [CreateTicketComponent]
})
export class CreateTicketModule {}
