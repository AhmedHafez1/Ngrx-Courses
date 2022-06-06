import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { AuthActions, AuthActionTypes } from "../auth/auth.actions";
import { User } from "../model/user.model";

type AuthState = { loggedIn: boolean; user: User };

export interface AppState {
  auth: AuthState;
}

const deafaultAuth: AuthState = { loggedIn: false, user: null };

function authReducer(
  state: AuthState = deafaultAuth,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return { loggedIn: true, user: action.payload.user };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
