import { Action } from "@ngrx/store";
import { User } from "../model/user.model";

export enum AuthActionTypes {
  Login = "[Auth] Login Action",
  Logout = "[Auth] Logout Action",
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { user: User }) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = LoginAction | LogoutAction;
