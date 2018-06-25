import {FluxStandardAction} from "flux-standard-action";
import {RegistrationDto, User} from "./model";

export type RegistrationUserAction = FluxStandardAction<RegistrationDto, Object>;
export type RegistrationUserSuccessAction = FluxStandardAction<User, Object>;
export type RegistrationUserErrorAction = FluxStandardAction<string, Object>;

export type RegistrationUserActionResult = RegistrationUserSuccessAction | RegistrationUserErrorAction;

export class RegistrationActions {

    static readonly REGISTRATION_USER = 'REGISTRATION_USER';
    static readonly REGISTRATION_USER_SUCCESS = 'REGISTRATION_USER_SUCCESS';
    static readonly REGISTRATION_USER_ERROR = 'REGISTRATION_USER_ERROR';


    static registrationUser = (registrationDto: RegistrationDto): RegistrationUserAction => ({
        type: RegistrationActions.REGISTRATION_USER,
        payload: registrationDto,
        meta: null
    });

    static registrationUserSuccess = (user: User): RegistrationUserSuccessAction => ({
        type:RegistrationActions.REGISTRATION_USER_SUCCESS,
        payload: user,
        meta: null
    });

  static registrationUserError = (error: any): RegistrationUserErrorAction => ({
    type:RegistrationActions.REGISTRATION_USER_ERROR,
    payload: error,
    meta: null
  });
}
