import {Component, TemplateRef, ViewChild} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NgRedux, select} from "@angular-redux/store";
import {ApplicationState} from "../store/state";
import {CreateColumnActions} from "./context/actions";
import {Observable} from "rxjs/Rx";
import {BoardListState} from "../boards-list/context/state";
import {User} from "../login/model";
import {BoardListAction} from "../boards-list/context/actions";

@Component({
  selector: 'app-create-column',
  templateUrl: 'create-column.component.html',
  styleUrls: ['create-column.component.css']
})
export class CreateColumnComponent {
  name: string = '';

  boardid: number = -1;
  @select(['boardListState', 'boards'])
  boardListObservable: Observable<BoardListState>;

  @ViewChild('template')
  private templateRef: TemplateRef<any>;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private ngRedux: NgRedux<ApplicationState>) {}


  openModal() {
    this.modalRef = this.modalService.show(this.templateRef, { class: 'modal-sm' });
    let user: User = this.ngRedux.getState().contextState.user;
    this.ngRedux.dispatch(BoardListAction.loadUserBoards(user.id));
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  clickOnCreate() {
    console.log('Якобы создали колонку.');
    this.ngRedux.dispatch(CreateColumnActions.createColumn({
      name: this.name
    }));
    this.closeFirstModal();
  }
}
