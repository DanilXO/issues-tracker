import { FluxStandardAction } from "flux-standard-action";
import {BoardDto} from "./model";
import {Board} from "../../board/state";

export type CreateBoardAction = FluxStandardAction<BoardDto, Object>;
export type CreateBoardSuccessAction = FluxStandardAction<Object, Object>;
export type CreateBoardErrorAction = FluxStandardAction<string, Object>;

export type CreateBoardActionResult = CreateBoardSuccessAction | CreateBoardErrorAction;

export class CreateBoardActions {
  static readonly CREATE_BOARD = 'CREATE_BOARD';
  static readonly CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
  static readonly CREATE_BOARD_ERROR = 'CREATE_BOARD_ERROR';

  static createBoard = (boardDto: BoardDto): CreateBoardAction => ({
    type: CreateBoardActions.CREATE_BOARD,
    payload: boardDto,
    meta: null
  });

  static createBoardSuccess = (board: Board): CreateBoardSuccessAction => ({
    type: CreateBoardActions.CREATE_BOARD_SUCCESS,
    payload: board,
    meta: null
  });

  static createBoardError = (error: string): CreateBoardErrorAction => ({
    type: CreateBoardActions.CREATE_BOARD_ERROR,
    payload: error,
    meta: null
  });
}
