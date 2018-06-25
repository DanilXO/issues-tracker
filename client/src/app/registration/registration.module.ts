import { NgModule } from "@angular/core";
import { RegistrationComponent } from "./registration.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {RegistrationEpics} from "./context/epics";
import {NotificationModule} from "../notification/notification.module";

@NgModule({
    imports: [FormsModule, CommonModule, NotificationModule],
    providers: [RegistrationEpics],
    declarations: [RegistrationComponent],
    exports: [RegistrationComponent]
})
export class RegistrationModule {}
