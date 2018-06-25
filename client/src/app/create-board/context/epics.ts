
import {of as observableOf, Observable} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { createEpicMiddleware, Epic, } from "redux-observable";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {CreateBoardActionResult, CreateBoardActions} from "./actions";
import {ApplicationState} from "../../store/state";
import {Board} from "../../board/state";

@Injectable()
export class CreateBoardEpics {
  static readonly CREATE_BOARD = 'CREATE_BOARD';
  static readonly CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
  static readonly CREATE_BOARD_ERROR = 'CREATE_BOARD_ERROR';

  constructor(private httpClient: HttpClient) {}

  public createEpic()
  {
    return createEpicMiddleware(this.createCreateBoardEpic());
  }

  private createCreateBoardEpic(): Epic<CreateBoardActionResult, ApplicationState>
  {
    return (action$) => action$
      .ofType(CreateBoardActions.CREATE_BOARD).pipe(
      switchMap((action) => this.httpClient.post(`${environment.apiUrl}rest/issues-tracker/board`, action.payload).pipe(
        map(data => CreateBoardActions.createBoardSuccess(data as Board)),
        catchError(errorResponse => observableOf(CreateBoardActions.createBoardError(errorResponse.error.uiMessage))),)
      ))
  }
}
