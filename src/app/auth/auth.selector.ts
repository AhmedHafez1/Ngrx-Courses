import { createSelector } from "@ngrx/store";

export const authSelector = (state) => state.auth;

export const loginSelector = createSelector(
  authSelector,
  (auth) => auth.loggedIn
);

export const logoutSelector = createSelector(
  loginSelector,
  (loggedIn) => !loggedIn
);
