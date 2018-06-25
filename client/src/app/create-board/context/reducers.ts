import {Action} from "redux";
import {CreateBoardActions, CreateBoardErrorAction, CreateBoardSuccessAction} from "./actions";
import {CreateBoardState} from "./state";

const INITIAL_STATE: CreateBoardState = {
  board: null,
  boardError: null
};

export function createBoardReducer(state: CreateBoardActions = INITIAL_STATE,
                                 action: Action) {
  switch (action.type) {
    case CreateBoardActions.CREATE_BOARD_SUCCESS:
      const createBoardSuccessAction: CreateBoardSuccessAction = action as CreateBoardSuccessAction;
      return { ...state, board: createBoardSuccessAction.payload};
    case CreateBoardActions.CREATE_BOARD_ERROR:
      const createBoardErrorAction: CreateBoardErrorAction = action as CreateBoardErrorAction;
      return {...state, boardError: createBoardErrorAction.payload};
  }
  return state;
}
