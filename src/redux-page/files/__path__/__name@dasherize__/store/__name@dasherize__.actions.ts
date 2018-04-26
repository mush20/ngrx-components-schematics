import { Action } from '@ngrx/store';
import { uniqueAction } from '@app/utils';

export const StateID: string = '<%= classify(name) %>';

export const PageActions = {
    INIT: uniqueAction(StateID, 'Init')
}

export class Init implements Action {
  readonly type = PageActions.INIT;
}



export type ActionTypes =
  | Init;
