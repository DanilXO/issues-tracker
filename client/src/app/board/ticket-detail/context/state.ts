export interface Ticket {
  id: number;
  title: string;
  description: string;
}

export interface ActiveTicketState {
    ticket: Ticket;
}
