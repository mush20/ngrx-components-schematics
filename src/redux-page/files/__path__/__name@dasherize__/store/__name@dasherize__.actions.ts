import { Action } from '@ngrx/store';
import { uniqueAction } from '@app/utils';

export const StateID: string = '<%= classify(name) %>';

export const INIT = uniqueAction(StateID, 'Init');
export const INIT_SUCCESS = uniqueAction(StateID, 'Init Success');

export class Init implements Action {

  readonly type = INIT;
}

export class InitSuccess implements Action {

  readonly type = INIT_SUCCESS;
}

export type ActionTypes =
  | Init
  | InitSuccess;
