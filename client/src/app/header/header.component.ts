import { Component, OnInit, ViewChild } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { RegistrationComponent } from "../registration/registration.component";
import { NgRedux, select } from "@angular-redux/store";
import { User } from "../login/model";
import { Observable } from "rxjs";
import { NotificationComponent } from "../notification/notification.component";
import { ContextActions } from "../store/context/actions";
import { ApplicationState } from "../store/state";
import { Router } from "@angular/router";
import { CreateBoardComponent  } from "../create-board/create-board.component";
import { CreateColumnComponent } from "../create-column/create-column.component";
import { CreateTicketComponent } from "../create-ticket/create-ticket.component";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"]
})
export class HeaderComponent implements OnInit {
    @select(["contextState", "user"])
    private user: Observable<User>;
    isLoginUser: boolean;

    @ViewChild(LoginComponent)
    loginComponent: LoginComponent;

    @ViewChild(RegistrationComponent)
    registrationComponent: RegistrationComponent;

    @ViewChild(CreateBoardComponent)
    createBoardComponent: CreateBoardComponent;
    @ViewChild(CreateColumnComponent)
    createColumnComponent: CreateColumnComponent;
    @ViewChild(CreateTicketComponent)
    createTicketComponent: CreateTicketComponent;

    constructor(private router: Router,
                private ngRedux: NgRedux<ApplicationState>) {}

    ngOnInit(): void {
        this.user.subscribe((user) => {
            this.isLoginUser = user !== null;
        });
    }

    openLoginDialog() {
        this.loginComponent.openModal();
    }

    openSignUpDialog() {
        this.registrationComponent.openModal();
    }

    clickLogout() {
        localStorage.removeItem("user");
        this.ngRedux.dispatch(ContextActions.logoutUser());
        this.router.navigate(['/']);
    }

    openCreateBoardDialog() {
      this.createBoardComponent.openModal();
    }

    openCreateColumnDialog() {
      this.createColumnComponent.openModal();
    }

    openCreateTicketDialog() {
      this.createTicketComponent.openModal();
    }
}
