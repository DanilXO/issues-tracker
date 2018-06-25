import { Action } from "redux";
import { BoardActions, LoadBoardByIdSuccessAction } from "./actions";
import { ActiveBoardState } from "./state";

const INITIAL_STATE: ActiveBoardState = {
  board: null
};

export function boardReducer(state: ActiveBoardState = INITIAL_STATE,
                             action: Action) {
    switch (action.type)
    {
        case BoardActions.LOAD_BOARD_BY_ID_SUCCESS:
            const loadBoardByIdSuccessAction: LoadBoardByIdSuccessAction = action as LoadBoardByIdSuccessAction;
            return { ...state, board: loadBoardByIdSuccessAction.payload}
    }


    return state;
}
