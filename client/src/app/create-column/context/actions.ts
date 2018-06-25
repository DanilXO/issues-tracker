import { FluxStandardAction } from "flux-standard-action";
import {ColumnDto} from "./model";
import {Column} from "../../board/state";

export type CreateColumnAction = FluxStandardAction<ColumnDto, Object>;
export type CreateColumnSuccessAction = FluxStandardAction<Object, Object>;
export type CreateColumnErrorAction = FluxStandardAction<string, Object>;

export type CreateColumnActionResult = CreateColumnSuccessAction | CreateColumnErrorAction;

export class CreateColumnActions {
  static readonly CREATE_COLUMN = 'CREATE_COLUMN';
  static readonly CREATE_COLUMN_SUCCESS = 'CREATE_COLUMN_SUCCESS';
  static readonly CREATE_COLUMN_ERROR = 'CREATE_COLUMN_ERROR';

  static createColumn = (columnDto: ColumnDto): CreateColumnAction => ({
    type: CreateColumnActions.CREATE_COLUMN,
    payload: columnDto,
    meta: null
  });

  static createColumnSuccess = (column: Column): CreateColumnSuccessAction => ({
    type: CreateColumnActions.CREATE_COLUMN_SUCCESS,
    payload: column,
    meta: null
  });

  static createColumnError = (error: string): CreateColumnErrorAction => ({
    type: CreateColumnActions.CREATE_COLUMN_ERROR,
    payload: error,
    meta: null
  });
}
