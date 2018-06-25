
import {of as observableOf, Observable} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {createEpicMiddleware, Epic} from "redux-observable";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ApplicationState} from "../../store/state";
import {environment} from "../../../environments/environment";

import { LoadUserBoardsActionResult, BoardListAction} from "./actions";
import {BoardListState} from "./state";

@Injectable()
export class BoardListEpics
{
  constructor(private httpClient: HttpClient) {}

  public createEpic()
  {
    return createEpicMiddleware(this.createLoadUserBoardsEpic());
  }

  private createLoadUserBoardsEpic(): Epic<LoadUserBoardsActionResult, ApplicationState>
  {
    return (action$) => action$
      .ofType(BoardListAction.LOAD_USER_BOARDS).pipe(
      switchMap((action) => this.httpClient.get(`${environment.apiUrl}rest/issues-tracker/user/${action.payload}/board`).pipe(
        map((data) => BoardListAction.loadUserBoardsSuccess(data as BoardListState)),
        catchError(errorResponse => observableOf(BoardListAction.loadUserBoardsError(errorResponse.error.uiMessage))),)
      ));
  }
}
