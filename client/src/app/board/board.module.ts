import { NgModule } from "@angular/core";
import { BoardEpics } from "./epics";
import { BoardComponent } from "./board.component";
import { DndModule } from "ng2-dnd";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ModalModule } from "ngx-bootstrap";
import { ColumnComponent } from "./column/column.component";
import {TicketComponent} from "./ticket/ticket.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [FormsModule, CommonModule, DndModule, ModalModule],
    declarations: [BoardComponent, ColumnComponent, TicketComponent],
    providers: [BoardEpics],
    exports: [BoardComponent]
})
export class BoardModule {}
