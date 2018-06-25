import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {CreateColumnEpics} from "./context/epics";
import {CreateColumnComponent} from "./create-column.component";

@NgModule({
  imports: [FormsModule, CommonModule],
  providers: [CreateColumnEpics],
  declarations: [CreateColumnComponent],
  exports: [CreateColumnComponent]
})
export class CreateColumnModule {}
