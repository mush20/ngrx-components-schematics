import { IPageState, PageState } from './<%=dasherize(name)%>.model';
import { PageActions, ActionTypes } from './<%=dasherize(name)%>.actions';
import { fromJS } from 'immutable';

export const initialState: IPageState = {
  title: 'Page Title',
  loading: false
};

export function reducer(state: PageState = fromJS(initialState), action: ActionTypes): PageState {
  switch (action.type) {
    case PageActions.INIT:
      return state.set('loading', true);
    default:
      return state;
  }
}
