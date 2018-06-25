import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {NotificationComponent} from "./notification.component";

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [NotificationComponent],
    exports: [NotificationComponent]
})
export class NotificationModule {}
