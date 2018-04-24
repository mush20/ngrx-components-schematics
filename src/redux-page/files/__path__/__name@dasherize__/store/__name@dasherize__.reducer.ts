import { IPageState, PageState } from './<%=dasherize(name)%>.model';
import * as PageActions from './<%=dasherize(name)%>.actions';
import { fromJS } from 'immutable';

export const initialState: IPageState = {
  title: 'Page Title',
  loading: false
};

export function reducer(state: PageState = fromJS(initialState), action: PageActions.ActionTypes): PageState {
  switch (action.type) {
    case PageActions.INIT:
      return state.set('loading', true);
    case PageActions.INIT_SUCCESS:
      return state.set('loading', false);
    default:
      return state;
  }
}
