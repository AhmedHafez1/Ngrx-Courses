import { Router } from "@angular/router";
import { loginSelector, logoutSelector } from "./auth/auth.selector";
import { Observable } from "rxjs";
import { AppState } from "./reducers/index";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { LogoutAction } from "./auth/auth.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(loginSelector);
    this.isLoggedOut$ = this.store.select(logoutSelector);
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }
}
