import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as PageActions from './<%=dasherize(name)%>.actions';

@Injectable()
export class <%= classify(name) %>Effects {

  @Effect()
  $init: Observable<Action> = this.actions$
    .ofType(PageActions.INIT)
    .map((action: PageActions.Init) => new PageActions.InitSuccess());

  constructor(protected actions$: Actions) {
  }

}
