
import {of as observableOf, Observable} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { createEpicMiddleware, Epic, } from "redux-observable";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CreateTicketActionResult, CreateTicketActions} from "./actions";
import {ApplicationState} from "../../store/state";
import {Ticket} from "../../board/state";

@Injectable()
export class CreateTicketEpics {
  static readonly CREATE_TICKET = 'CREATE_TICKET';
  static readonly CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
  static readonly CREATE_TICKET_ERROR = 'CREATE_TICKET_ERROR';

  constructor(private httpClient: HttpClient) {}

  public createEpic()
  {
    return createEpicMiddleware(this.createCreateTicketEpic());
  }

  private createCreateTicketEpic(): Epic<CreateTicketActionResult, ApplicationState>
  {
    return (action$) => action$
      .ofType(CreateTicketActions.CREATE_TICKET).pipe( //ToDo: Поправить ссылку
      switchMap((action) => this.httpClient.post(`${environment.apiUrl}rest/issues-tracker/board/$_{action.payload}/$_{action.payload}/ticket`, action.payload).pipe(
        map(data => CreateTicketActions.createTicketSuccess(data as Ticket)),
        catchError(errorResponse => observableOf(CreateTicketActions.createTicketError(errorResponse.error.uiMessage))),)
      ))
  }
}
