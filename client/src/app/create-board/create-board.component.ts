import {Component, TemplateRef, ViewChild} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NgRedux} from "@angular-redux/store";
import {ApplicationState} from "../store/state";
import {CreateBoardActions} from "./context/actions";

@Component({
  selector: 'app-create-board',
  templateUrl: 'create-board.component.html',
  styleUrls: ['create-board.component.css']
})
export class CreateBoardComponent {
  name: string = '';

  @ViewChild('template')
  private templateRef: TemplateRef<any>;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private ngRedux: NgRedux<ApplicationState>) {}


  openModal() {
    this.modalRef = this.modalService.show(this.templateRef, { class: 'modal-sm' });
  }

  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }

  clickOnCreate() {
    console.log('Якобы создали доску.');
    this.ngRedux.dispatch(CreateBoardActions.createBoard({
      name: this.name
    }));
    this.closeFirstModal();
  }
}
