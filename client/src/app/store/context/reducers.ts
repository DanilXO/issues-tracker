import { Action } from "redux";
import {
    AuthorizationUserErrorAction, AuthorizationUserSuccessAction, ContextActions, LogoutUserAction, SetSafeUserAction
} from "./actions";
import {ContextState} from "./state";

const INITIAL_STATE: ContextState = {
    user: null,
    loginError: null,
    createUserStatus: null,
    createUserError: null };

export function contextReducer(state: ContextState = INITIAL_STATE,
                               action: Action) {
    switch (action.type)
    {
      case ContextActions.LOGIN_USER_SUCCESS:
            const authorizationUserSuccessAction: AuthorizationUserSuccessAction = action as AuthorizationUserSuccessAction;
            state.createUserStatus = true;
            return { ...state, user: authorizationUserSuccessAction.payload};
        case ContextActions.LOGIN_USER_ERROR:
            const authorizationUserErrorAction: AuthorizationUserErrorAction = action as AuthorizationUserErrorAction;
            state.createUserStatus = false;
            return {...state, loginError: authorizationUserErrorAction.payload};
        case ContextActions.LOGOUT_USER:
            const logoutUserAction: LogoutUserAction = action as LogoutUserAction;
            state.createUserStatus = false;
            return {...state, user: logoutUserAction.payload};
        case ContextActions.SET_SAFE_USER:
            const setSafeUserAction: SetSafeUserAction = action as SetSafeUserAction;
            state.createUserStatus = false;
            return {...state, user: setSafeUserAction.payload};
    }
    return state;
}

