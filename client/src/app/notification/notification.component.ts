import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import {$} from "protractor";



@Component({
    selector: 'app-notification',
    templateUrl: 'notification.component.html',
    styleUrls: ['notification.component.css']
})
export class NotificationComponent  {
    title: string = '';
    content: string = '';

    @ViewChild('template')
    private templateRef: TemplateRef<any>;

    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    showNotification(title, content) {
        this.title = title;
        this.content = content;
        this.modalRef = this.modalService.show(this.templateRef, { class: 'modal-sm' });
        setTimeout(() => {
            this.closeModal();
        }, 2000);
    }

    closeModal() {
        this.title= '';
        this.content= '';
        this.modalRef.hide();
        this.modalRef = null;
    }
}
