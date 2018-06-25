import { FluxStandardAction } from "flux-standard-action";
import {TicketDto} from "./model";
import {Ticket} from "../../board/state";

export type CreateTicketAction = FluxStandardAction<TicketDto, Object>;
export type CreateTicketSuccessAction = FluxStandardAction<Object, Object>;
export type CreateTicketErrorAction = FluxStandardAction<string, Object>;

export type CreateTicketActionResult = CreateTicketSuccessAction | CreateTicketErrorAction;

export class CreateTicketActions {
  static readonly CREATE_TICKET = 'CREATE_TICKET';
  static readonly CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
  static readonly CREATE_TICKET_ERROR = 'CREATE_TICKET_ERROR';

  static createTicket = (ticketDto: TicketDto): CreateTicketAction => ({
    type: CreateTicketActions.CREATE_TICKET,
    payload: ticketDto,
    meta: null
  });

  static createTicketSuccess = (ticket: Ticket): CreateTicketSuccessAction => ({
    type: CreateTicketActions.CREATE_TICKET_SUCCESS,
    payload: ticket,
    meta: null
  });

  static createTicketError = (error: string): CreateTicketErrorAction => ({
    type: CreateTicketActions.CREATE_TICKET_ERROR,
    payload: error,
    meta: null
  });
}
