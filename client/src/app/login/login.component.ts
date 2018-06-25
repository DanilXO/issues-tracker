import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { NgRedux, select } from "@angular-redux/store";
import { ApplicationState } from "../store/state";
import { ContextActions } from "../store/context/actions";
import { Observable, Subscription } from "rxjs";
import { User } from "./model";
import { Router } from "@angular/router";
import { NotificationComponent } from "../notification/notification.component";

@Component({
    selector: "app-login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
    public login: string = "";
    public password: string = "";
    public safeAuth: boolean = false;

    @select(["contextState", "user"])
    private userObservable: Observable<User>;
    @select(["contextState", "createUserStatus"])
    loginUserStatusObservable: Observable<boolean>;

    private userSubscribe: Subscription;
    private loginUserStatusSubscrube: Subscription;

    @ViewChild("template")
    private templateRef: TemplateRef<any>;

    @ViewChild(NotificationComponent)
    notificationComponent: NotificationComponent;

    modalRef: BsModalRef;
    private isOpen: boolean = false;

    constructor(private modalService: BsModalService,
                private router: Router,
                private ngRedux: NgRedux<ApplicationState>) {}

    openModal() {
        this.modalRef = this.modalService.show(this.templateRef, {class: "modal-sm"});
        this.isOpen = true;
    }

    closeFirstModal() {
        this.modalRef.hide();
        this.isOpen = false;
    }

    public clickOnAuthorization() {
        this.ngRedux.dispatch(ContextActions.authorizationUser({
            login: this.login,
            password: this.password
        }));
    }

    ngOnInit(): void {
        this.userSubscribe = this.userObservable.subscribe((user) => {
            if (user && this.isOpen) {
                if (this.safeAuth) {
                    localStorage.setItem("user", JSON.stringify(user));
                }
                this.notificationComponent.showNotification('Добро пожаловать!', 'Добро пожаловать, '
                    + user.login + '!');
                this.router.navigate(["/ui/boards"]);
                this.closeFirstModal();
            }
        });
        this.loginUserStatusSubscrube = this.loginUserStatusObservable.subscribe((createUserStatus) => {
            if (createUserStatus != null && !createUserStatus && this.isOpen) {
                this.notificationComponent.showNotification("Ошибка!", "Неверный логин или пароль!");
            }
        });
    }

    ngOnDestroy(): void {
        this.notificationComponent = null;
        this.userSubscribe.unsubscribe();
    }
}
