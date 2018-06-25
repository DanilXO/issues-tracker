import { FluxStandardAction } from "flux-standard-action";
import {Ticket} from "../../state";

export type LoadTicketByIdAction = FluxStandardAction<number, Object>;
export type loadTicketByIdSuccessAction = FluxStandardAction<Ticket, Object>;

export class TicketDetailActions {
    static readonly LOAD_TICKET_BY_ID = 'LOAD_TICKET_BY_ID';
    static readonly LOAD_TICKET_BY_ID_SUCCESS = 'LOAD_TICKET_BY_ID_SUCCESS';

    static loadTicketById = (idTicket: number): LoadTicketByIdAction => ({
        type: TicketDetailActions.LOAD_TICKET_BY_ID,
        payload: idTicket,
        meta: null
    });

  static loadTicketByIdSuccess = (ticket: Ticket): loadTicketByIdSuccessAction => ({
    type: TicketDetailActions.LOAD_TICKET_BY_ID_SUCCESS,
    payload: ticket,
    meta: null
  });
}
