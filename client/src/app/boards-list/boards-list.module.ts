import {BoardsListComponent} from "./boards-list.component";
import {BoardListEpics} from "./context/epics";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [BoardsListComponent],
  providers: [BoardListEpics],
  exports: [BoardsListComponent]
})
export class BoardListModule {}
