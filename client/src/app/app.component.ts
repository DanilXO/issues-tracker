import { Component, OnInit } from "@angular/core";
import { ApplicationState } from "./store/state";
import { NgRedux } from "@angular-redux/store";
import { User } from "./login/model";
import { ContextActions } from "./store/context/actions";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    constructor(private router: Router,
                private ngRedux: NgRedux<ApplicationState>) {}

    ngOnInit(): void {
        let userString: string = localStorage.getItem("user");
        if (userString) {
            let safeUser = JSON.parse(userString) as User;
            //TODO: refactoring action
            this.ngRedux.dispatch(ContextActions.setSafeUser(safeUser));
            this.router.navigate(["/ui/boards"]);
        }
    }
}
