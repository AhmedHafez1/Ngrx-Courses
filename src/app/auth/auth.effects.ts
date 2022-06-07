import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActionTypes, LoginAction, LogoutAction } from "./auth.actions";
import { defer, of } from "rxjs";

@Injectable()
export class AuthEffects {
  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.Login),
    tap((action) => {
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<LogoutAction>(AuthActionTypes.Logout),
    tap(() => {
      localStorage.removeItem("user");
      this.router.navigateByUrl("/login");
    })
  );

  @Effect()
  init$ = defer(() => {
    const user = localStorage.getItem("user");

    if (user) {
      return of(new LoginAction({ user: JSON.parse(user) }));
    } else {
      return of(new LogoutAction());
    }
  });

  constructor(private actions$: Actions, private router: Router) {}
}
