import { Injectable } from "@angular/core";
import { BoardEpics } from "../board/epics";
import { AuthorizationEpics } from "./context/epics";
import { BoardListEpics } from "../boards-list/context/epics";
import { RegistrationEpics } from "../registration/context/epics";
import {TicketDetailEpic} from "../board/ticket-detail/context/epics";

@Injectable()
export class RootEpics {
    constructor(private boardEpics: BoardEpics,
                private authorizationEpics: AuthorizationEpics,
                private registrationEpics: RegistrationEpics,
                private boardListEpics: BoardListEpics,
                private ticketDetailEpic: TicketDetailEpic) {}

    public createEpics() {
        return [
            this.boardEpics.createEpic(),
            this.authorizationEpics.createEpic(),
            this.registrationEpics.createEpic(),
            this.boardListEpics.createEpic(),
            this.ticketDetailEpic.createEpic()
        ];
    }
}
