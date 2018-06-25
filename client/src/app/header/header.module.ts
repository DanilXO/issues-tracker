import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { LoginModule } from "../login/login.module";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CommonModule } from "@angular/common";
import {RegistrationModule} from "../registration/registration.module";
import {CreateTicketModule} from "../create-ticket/create-ticket.module";
import {NotificationModule} from "../notification/notification.module";
import {CreateBoardModule} from "../create-board/create-board.module";
import {CreateColumnModule} from "../create-column/create-column.module";

@NgModule({
    imports: [CommonModule, LoginModule, CreateBoardModule, CreateColumnModule, CreateTicketModule, RegistrationModule,NotificationModule, BsDropdownModule.forRoot()],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule {}
