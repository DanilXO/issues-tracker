import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { createEpicMiddleware, Epic, } from 'redux-observable';
import {loadTicketByIdSuccessAction, TicketDetailActions} from "./actions";
import {ApplicationState} from "../../../store/state";
import {map, switchMap} from 'rxjs/operators';
import {environment} from "../../../../environments/environment";
import {Ticket} from "../../state";

@Injectable()
export class TicketDetailEpic
{
  constructor(private httpClient: HttpClient) {}

  public createEpic()
  {
    return createEpicMiddleware(this.createTicketByIdEpic());
  }

  private createTicketByIdEpic(): Epic<loadTicketByIdSuccessAction, ApplicationState>
  {
    return (action$, store) => action$
      .ofType(TicketDetailActions.LOAD_TICKET_BY_ID).pipe(
        switchMap((action) => this.httpClient.get(`${environment.apiUrl}rest/issues-tracker/ticket/${action.payload}`).pipe(
          map(data => TicketDetailActions.loadTicketByIdSuccess(data as Ticket)))
        ));
  }
}

