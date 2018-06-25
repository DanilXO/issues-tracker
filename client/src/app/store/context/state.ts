import { User } from "../../login/model";

export interface ContextState {
    user: User;
    loginError: string;
    createUserStatus: boolean;
    createUserError: string;
}