import { AuthorizationDto, User } from "../../login/model";
import { FluxStandardAction } from "flux-standard-action";

export type AuthorizationUserAction = FluxStandardAction<AuthorizationDto, Object>;
export type AuthorizationUserSuccessAction = FluxStandardAction<User, Object>;
export type SetSafeUserAction = FluxStandardAction<User, Object>;
export type LogoutUserAction = FluxStandardAction<User, Object>;
export type AuthorizationUserErrorAction = FluxStandardAction<string, Object>;

export type AuthorizationUserActionResult = AuthorizationUserSuccessAction | AuthorizationUserErrorAction;

export class ContextActions {
    static readonly LOGIN_USER = 'LOGIN_USER';
    static readonly LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
    static readonly LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
    static readonly LOGOUT_USER = 'LOGOUT_USER';
    static readonly SET_SAFE_USER = 'SET_SAFE_USER';

    static authorizationUser = (authorizationDto: AuthorizationDto): AuthorizationUserAction => ({
        type: ContextActions.LOGIN_USER,
        payload: authorizationDto,
        meta: null
    });

    static authorizationUserSuccess = (user: User): AuthorizationUserSuccessAction => ({
        type:ContextActions.LOGIN_USER_SUCCESS,
        payload: user,
        meta: null
    });

    static authorizationUserError = (error: any): AuthorizationUserErrorAction => ({
        type:ContextActions.LOGIN_USER_ERROR,
        payload: error,
        meta: null
    });

    static logoutUser = (): LogoutUserAction => ({
        type:ContextActions.LOGOUT_USER,
        payload: null,
        meta: null
    });

    static setSafeUser = (user: User): SetSafeUserAction => ({
        type:ContextActions.SET_SAFE_USER,
        payload: user,
        meta: null
    });
}
