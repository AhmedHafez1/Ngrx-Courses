import { loginSelector } from "./auth.selector";
import { AppState } from "./../reducers/index";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(loginSelector).pipe(
      tap((loggedIn) => {
        if (!loggedIn) this.router.navigateByUrl("/login");
      })
    );
  }
}
