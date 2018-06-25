import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Ticket} from "../state";
import {NgRedux, select} from "@angular-redux/store";
import {ApplicationState} from "../../store/state";
import {Observable} from "rxjs/Rx";
import {TicketDetailActions} from "./context/actions";

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit  {
  @select(['activeTicketState', 'ticket'])
  private ticketObservable: Observable<Ticket>;
  id: number;
  title: string;
  description: string;

  constructor(private ngRedux: NgRedux<ApplicationState>,
              private route: ActivatedRoute,
              private router: Router,
              private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ngRedux.dispatch(TicketDetailActions.loadTicketById(id));
    this.ticketObservable.subscribe((ticket) => {
       //TODO: hack need 2 component titcket detal, and ticket detailContainer
      if (!ticket) {
        return;
      }
      this.id = ticket.id;
      this.title = ticket.title;
      this.description = ticket.description;
      this.ref.detectChanges();
    })
  }
  public clickOnBack() {
    this.router.navigateByUrl(`ui/board/`);
  }
}
