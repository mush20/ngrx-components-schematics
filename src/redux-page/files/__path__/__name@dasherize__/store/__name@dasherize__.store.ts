import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreService, IAppState } from '@app/store';
import { PageState } from './<%=dasherize(name)%>.model';
import { StateID, Init } from './<%=dasherize(name)%>.actions';

@Injectable()
export class <%= classify(name) %>Store extends StoreService<PageState> {

  readonly selector = (state: IAppState): PageState => {
    return state[StateID];
  }

  constructor(public store: Store<IAppState>) {
    super(store);
  }

  init(): void {
    this.dispatch(new Init());
  }

}
