
import {of as observableOf,  Observable } from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { ApplicationState } from "../state";
import { createEpicMiddleware, Epic, } from "redux-observable";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/switchMap";

import { AuthorizationUserActionResult, ContextActions} from "./actions";
import { User } from "../../login/model";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthorizationEpics
{
    constructor(private httpClient: HttpClient) {}

    public createEpic()
    {
        return createEpicMiddleware(this.createAuthorizationEpic());
    }

    private createAuthorizationEpic(): Epic<AuthorizationUserActionResult, ApplicationState>
    {
        return (action$) => action$
            .ofType(ContextActions.LOGIN_USER).pipe(
            switchMap((action) => this.httpClient.post(`${environment.apiUrl}rest/issues-tracker/auth`, action.payload).pipe(
                map(data => ContextActions.authorizationUserSuccess(data as User)),
                catchError(errorResponse => observableOf(ContextActions.authorizationUserError(errorResponse.error.uiMessage))),)
            ));
    }
}
