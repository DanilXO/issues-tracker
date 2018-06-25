import { Action } from "redux";
import {RegistrationActions, RegistrationUserErrorAction, RegistrationUserSuccessAction} from "./actions";
import {RegState} from "./state";

const REG_STATE: RegState = { user: null,
                              signUpUserStatus: null,
                              signUpError: null};

export function regReducer(state: RegState = REG_STATE,
                           action: Action) {
    switch (action.type)
      {
      case RegistrationActions.REGISTRATION_USER_SUCCESS:
            const registrationUserSuccessAction: RegistrationUserSuccessAction = action as RegistrationUserSuccessAction;
            return { ...state, user: registrationUserSuccessAction.payload}
      case RegistrationActions.REGISTRATION_USER_ERROR:
        const registrationUserErrorAction: RegistrationUserErrorAction = action as RegistrationUserErrorAction ;
        state.signUpUserStatus = false;
        console.log(state.signUpUserStatus);
        return {...state, signUpError: registrationUserErrorAction.payload};
      }
  return state;
}
