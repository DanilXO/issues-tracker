import {Action} from "redux";
import {loadTicketByIdSuccessAction, TicketDetailActions} from "./actions";
import {ActiveTicketState} from "./state";

const INITIAL_STATE: ActiveTicketState = {
  ticket: null,
};

export function ticketDetailReducer(state: ActiveTicketState = INITIAL_STATE,
                             action: Action) {
    switch (action.type)
    {
        case TicketDetailActions.LOAD_TICKET_BY_ID_SUCCESS:
            const loadBoardByIdSuccessAction: loadTicketByIdSuccessAction = action as loadTicketByIdSuccessAction;
            return { ...state, ticket: loadBoardByIdSuccessAction.payload}
    }

    return state;
}
