import { FluxStandardAction } from "flux-standard-action";
import {BoardListState} from "./state";
import {Board} from "../../board/state";

export type LoadUserBoardsAction = FluxStandardAction<number, Object>;
export type LoadUserBoardsSuccessAction = FluxStandardAction<BoardListState, Object>;
export type LoadUserBoardsErrorAction = FluxStandardAction<string, Object>;

export type LoadUserBoardsActionResult = LoadUserBoardsSuccessAction | LoadUserBoardsErrorAction;

export type UserBoardChangeAction = FluxStandardAction<number, Object>;

export class BoardListAction {
  static readonly LOAD_USER_BOARDS = 'LOAD_USER_BOARDS';
  static readonly LOAD_USER_BOARDS_SUCCESS = 'LOAD_USER_BOARDS_SUCCESS';
  static readonly LOAD_USER_BOARDS_ERROR = 'LOAD_USER_BOARDS_ERROR';

  static readonly USER_BOARD_CHANGE = 'USER_BOARD_CHANGE';

  static loadUserBoards = (idUser: number): LoadUserBoardsAction => ({
    type: BoardListAction.LOAD_USER_BOARDS,
    payload: idUser,
    meta: null
  });

  static loadUserBoardsSuccess = (boards: BoardListState): LoadUserBoardsSuccessAction => ({
    type: BoardListAction.LOAD_USER_BOARDS_SUCCESS,
    payload: boards,
    meta: null
  });

  static loadUserBoardsError = (error: string): LoadUserBoardsErrorAction => ({
    type: BoardListAction.LOAD_USER_BOARDS_ERROR,
    payload: error,
    meta: null
  });
}
