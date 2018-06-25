import {Action} from "redux";
import {CreateTicketActions, CreateTicketErrorAction, CreateTicketSuccessAction} from "./actions";
import {CreateTicketState} from "./state";

const INITIAL_STATE: CreateTicketState = {
  ticket: null,
  ticketError: null
};

export function createTicketReducer(state: CreateTicketActions = INITIAL_STATE,
                                 action: Action) {
  switch (action.type) {
    case CreateTicketActions.CREATE_TICKET_SUCCESS:
      const createTicketSuccessAction: CreateTicketSuccessAction = action as CreateTicketSuccessAction;
      return { ...state, ticket: createTicketSuccessAction.payload};
    case CreateTicketActions.CREATE_TICKET_ERROR:
      const createTicketErrorAction: CreateTicketErrorAction = action as CreateTicketErrorAction;
      return {...state, ticketError: createTicketErrorAction.payload};
  }
  return state;
}
