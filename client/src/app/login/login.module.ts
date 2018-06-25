import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthorizationEpics } from "../store/context/epics";
import {NotificationModule} from "../notification/notification.module";

@NgModule({
    imports: [FormsModule, CommonModule, NotificationModule],
    providers: [AuthorizationEpics],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {}