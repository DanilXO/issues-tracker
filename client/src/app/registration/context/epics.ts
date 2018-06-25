
import {of as observableOf, Observable} from 'rxjs';

import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {createEpicMiddleware, Epic} from "redux-observable";
import {RegistrationActions, RegistrationUserAction, RegistrationUserSuccessAction, RegistrationUserActionResult} from "./actions";
import {ApplicationState} from "../../store/state";
import {environment} from "../../../environments/environment";
import {User} from "./model";

@Injectable()
export class RegistrationEpics
{
  constructor(private httpClient: HttpClient) {}

  public createEpic()
  {
    return createEpicMiddleware(this.createRegistrationEpic());
  }

  private createRegistrationEpic(): Epic<RegistrationUserActionResult, ApplicationState>
  {
    return (action$) => action$
      .ofType(RegistrationActions.REGISTRATION_USER).pipe(
      switchMap((action) => this.httpClient.post(`${environment.apiUrl}rest/issues-tracker/reg`, action.payload).pipe(
        map(data => RegistrationActions.registrationUserSuccess(data as User)),
        catchError(errorResponse => observableOf(RegistrationActions.registrationUserError(errorResponse.error.uiMessage))),)
      ));
  }
}
