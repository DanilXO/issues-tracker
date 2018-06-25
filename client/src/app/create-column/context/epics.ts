
import {of as observableOf, Observable} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { createEpicMiddleware, Epic, } from "redux-observable";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CreateColumnActionResult, CreateColumnActions} from "./actions";
import {ApplicationState} from "../../store/state";
import {Column} from "../../board/state";

@Injectable()
export class CreateColumnEpics {
  static readonly CREATE_COLUMN = 'CREATE_COLUMN';
  static readonly CREATE_COLUMN_SUCCESS = 'CREATE_COLUMN_SUCCESS';
  static readonly CREATE_COLUMN_ERROR = 'CREATE_COLUMN_ERROR';

  constructor(private httpClient: HttpClient) {}

  public createEpic()
  {
    return createEpicMiddleware(this.createCreateColumnEpic());
  }

  private createCreateColumnEpic(): Epic<CreateColumnActionResult, ApplicationState>
  {
    return (action$) => action$
      .ofType(CreateColumnActions.CREATE_COLUMN).pipe( //ToDo: Отредактировать данные тут
      switchMap((action) => this.httpClient.post(`${environment.apiUrl}rest/issues-tracker/board/$_{action.boardId}/column`, action.payload).pipe(
        map(data => CreateColumnActions.createColumnSuccess(data as Column)),
        catchError(errorResponse => observableOf(CreateColumnActions.createColumnError(errorResponse.error.uiMessage))),)
      ))
  }
}
