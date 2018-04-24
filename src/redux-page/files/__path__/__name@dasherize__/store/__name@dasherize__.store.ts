import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreService, IAppState } from '@app/store';
import { PageState } from './<%=dasherize(name)%>.model';
import * as PageActions from './<%=dasherize(name)%>.actions';

@Injectable()
export class <%= classify(name) %>Store extends StoreService<PageState> {

  readonly selector = (state: IAppState): PageState => {
    return state[PageActions.StateID];
  }

  constructor(public store: Store<IAppState>) {
    super(store);
  }

  init(): void {
    this.dispatch(new PageActions.Init());
  }

}
