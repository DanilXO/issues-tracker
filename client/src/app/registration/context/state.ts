import {User} from "./model";

export interface RegState {
    user: User;
    signUpUserStatus: boolean;
    signUpError: string;
}
