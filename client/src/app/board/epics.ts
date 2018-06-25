import {map, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { BoardActions, LoadBoardByIdSuccessAction } from "./actions";
import { ApplicationState } from "../store/state";
import { createEpicMiddleware, Epic, } from 'redux-observable';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


import { Board } from "./state";

@Injectable()
export class BoardEpics
{
    constructor(private httpClient: HttpClient) {}

    public createEpic()
    {
        return createEpicMiddleware(this.createLoadBuildingByIdEpic());
    }

    private createLoadBuildingByIdEpic(): Epic<LoadBoardByIdSuccessAction, ApplicationState>
    {
        return (action$, store) => action$
            .ofType(BoardActions.LOAD_BOARD_BY_ID).pipe(
            switchMap((action) => this.httpClient.get(`${environment.apiUrl}rest/issues-tracker/board/${action.payload}`).pipe(
            map(data => BoardActions.loadBoardByIdSuccess(data as Board)))
            ));
    }
}
