import {ActiveBoardState} from "../board/state";
import {ContextState} from "./context/state";
import {BoardListState} from "../boards-list/context/state";
import {ActiveTicketState} from "../board/ticket-detail/context/state";

export interface ApplicationState {
    activeBoardState?: ActiveBoardState,
    activeTicketState?: ActiveTicketState,
    contextState?: ContextState,
    boardListState?: BoardListState
}
