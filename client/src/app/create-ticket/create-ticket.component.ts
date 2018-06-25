import {Component, TemplateRef, ViewChild} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NgRedux, select} from "@angular-redux/store";
import {ApplicationState} from "../store/state";
import {CreateTicketActions} from "./context/actions";
import {Observable} from "rxjs/Rx";
import {BoardListState} from "../boards-list/context/state";
import {User} from "../login/model";
import {BoardListAction} from "../boards-list/context/actions";
import {Column} from "../board/state";

@Component({
  selector: 'app-create-ticket',
  templateUrl: 'create-ticket.component.html',
  styleUrls: ['create-ticket.component.css']
})
export class CreateTicketComponent {
  @select(['boardListState', 'boards'])
  boardListObservable: Observable<BoardListState>;

  columnListObservable: Observable<Column>;

  boardid: number = -1;
  columnid: number = -1;

  title: string = '';
  description: string = '';

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

  boardChange() {
    this.boardListObservable.subscribe(x => {
      for(let obj in x){
        if (x[obj].id == this.boardid) {
          this.columnListObservable = Observable.of(x[obj].columns);
        }
      }
    });
  }

  clickOnCreate() {
      console.log('Якобы создали тикет.');
      this.ngRedux.dispatch(CreateTicketActions.createTicket({
        title: this.title,
        description: this.description
      }));
    this.closeFirstModal();
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
