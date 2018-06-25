import {Action} from "redux";
import {CreateColumnActions, CreateColumnErrorAction, CreateColumnSuccessAction} from "./actions";
import {CreateColumnState} from "./state";

const INITIAL_STATE: CreateColumnState = {
  column: null,
  columnError: null
};

export function createColumnReducer(state: CreateColumnActions = INITIAL_STATE,
                                 action: Action) {
  switch (action.type) {
    case CreateColumnActions.CREATE_COLUMN_SUCCESS:
      const createColumnSuccessAction: CreateColumnSuccessAction = action as CreateColumnSuccessAction;
      return { ...state, column: createColumnSuccessAction.payload};
    case CreateColumnActions.CREATE_COLUMN_ERROR:
      const createColumnErrorAction: CreateColumnErrorAction = action as CreateColumnErrorAction;
      return {...state, columnError: createColumnErrorAction.payload};
  }
  return state;
}
