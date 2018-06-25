import {Column, Ticket} from '../../board/state';

export interface CreateTicketState {
  ticket: Ticket;
  ticketError: string;
}

export interface ColumnListState {
  columns: Column[];
  columnsError: string;
}
