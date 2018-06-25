import {BoardListAction, LoadUserBoardsErrorAction, LoadUserBoardsSuccessAction} from "./actions";
import {Action} from "redux";
import {BoardListState} from "./state";

const INITIAL_STATE: BoardListState = {
  boards: null,
  boardsError: null
};

export function boardListReducer(state: BoardListAction = INITIAL_STATE,
                               action: Action) {
  switch (action.type)
  {
    case BoardListAction.LOAD_USER_BOARDS_SUCCESS:
      const loadUserBoardsSuccessAction: LoadUserBoardsSuccessAction = action as LoadUserBoardsSuccessAction;
      return { ...state, boards: loadUserBoardsSuccessAction.payload};
    case BoardListAction.LOAD_USER_BOARDS_ERROR:
      const loadUserBoardsErrorAction: LoadUserBoardsErrorAction = action as LoadUserBoardsErrorAction;
      return {...state, boardsError: loadUserBoardsErrorAction.payload};
  }
  return state;
}
