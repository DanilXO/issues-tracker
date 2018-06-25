import { combineReducers } from "redux";
import { boardReducer } from "../board/reducer";
import { contextReducer } from "./context/reducers";
import {boardListReducer} from "../boards-list/context/reducers";
import {ticketDetailReducer} from "../board/ticket-detail/context/reducer";

export const rootReducer =
    combineReducers({
        activeBoardState: boardReducer,
        activeTicketState: ticketDetailReducer,
        contextState: contextReducer,
        boardListState: boardListReducer
    });
