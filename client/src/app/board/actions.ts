import { FluxStandardAction } from "flux-standard-action";
import { Board } from "./state";

export type LoadBoardByIdAction = FluxStandardAction<number, Object>;

export type LoadBoardByIdSuccessAction = FluxStandardAction<Board, Object>;

export class BoardActions {
    static readonly LOAD_BOARD_BY_ID = 'LOAD_BOARD_BY_ID';
    static readonly LOAD_BOARD_BY_ID_SUCCESS = 'LOAD_BOARD_BY_ID_SUCCESS';

    static loadABoardById = (idBoard: number): LoadBoardByIdAction => ({
        type: BoardActions.LOAD_BOARD_BY_ID,
        payload: idBoard,
        meta: null
    });

    static loadBoardByIdSuccess = (board: Board): LoadBoardByIdSuccessAction => ({
            type: BoardActions.LOAD_BOARD_BY_ID_SUCCESS,
            payload: board,
            meta: null
    });
}
