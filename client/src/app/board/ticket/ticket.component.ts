import { Ticket } from "../state";
import { Component, Input, OnInit } from "@angular/core";
import { ApplicationState } from "../../store/state";
import { NgRedux } from "@angular-redux/store/lib/src";
import { Router } from "@angular/router";

@Component({
    selector: "app-ticket",
    templateUrl: "./ticket.component.html",
    styleUrls: ["./ticket.component.css"]
})
export class TicketComponent {
    @Input()
    ticket: Ticket;

    constructor(private ngRedux: NgRedux<ApplicationState>,
                private router: Router) {}

    public clickOnTicketChange(idTicket: number) {
        this.router.navigateByUrl(`ui/ticket/${idTicket}`)
    }
}
