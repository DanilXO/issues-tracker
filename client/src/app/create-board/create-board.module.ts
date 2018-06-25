import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {CreateBoardEpics} from "./context/epics";
import {CreateBoardComponent} from "./create-board.component";

@NgModule({
  imports: [FormsModule, CommonModule],
  providers: [CreateBoardEpics],
  declarations: [CreateBoardComponent],
  exports: [CreateBoardComponent]
})
export class CreateBoardModule {}
