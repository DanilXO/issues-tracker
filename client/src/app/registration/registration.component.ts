import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {NgRedux, select} from "@angular-redux/store";
import {ApplicationState} from "../store/state";
import {RegistrationActions} from "./context/actions";
import {NotificationComponent} from "../notification/notification.component";
import {Observable, Subscription} from "rxjs";
import {User} from "./context/model";
import {Router} from "@angular/router";


@Component({
    selector: 'app-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {
    login: string = '';
    password: string = '';

    @select(['regState', 'user'])
    private userObservable: Observable<User>;
    @select(['regState', 'signUpError'])
    signUpErrorObservable: Observable<string>;
    @select(['regState', 'signUpUserStatus'])
    signUpUserStatusObservable: Observable<boolean>;


    private userSubscribe: Subscription;
    private signUpUserStatusSubscrube: Subscription;

    @ViewChild('template')
    private templateRef: TemplateRef<any>;

    @ViewChild(NotificationComponent)
    notificationComponent: NotificationComponent;


  modalRef: BsModalRef;
    constructor(private modalService: BsModalService,
                private router:Router,
                private ngRedux: NgRedux<ApplicationState>) {}

    openModal() {
        this.modalRef = this.modalService.show(this.templateRef, { class: 'modal-sm' });
    }

    closeFirstModal() {
        this.modalRef.hide();
        this.modalRef = null;
    }

    public clickOnRegistration()
    {
        this.ngRedux.dispatch(RegistrationActions.registrationUser({
            login: this.login,
            password: this.password
        }));
    }

  ngOnInit(): void {
    this.userSubscribe = this.userObservable.subscribe((user) => {
      if (user) {
        this.notificationComponent.showNotification('Добро пожаловать!', 'Добро пожаловать, '
          +this.login + '!'+' Вы успешно зарегестрированы!');
        this.closeFirstModal();
      }
    });
    this.signUpUserStatusSubscrube = this.signUpUserStatusObservable.subscribe((createUserStatus) => {
      if (createUserStatus != null && !createUserStatus) {
        this.notificationComponent.showNotification('Ошибка регистрации!', 'Возможно, такой пользователь уже зарегестрирован');
      }
    });

  }

  ngOnDestroy(): void {
    this.closeFirstModal();
    this.notificationComponent  = null;
    this.userSubscribe.unsubscribe();
  }
}
