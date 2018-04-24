import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { <%= classify(name) %>Component } from './<%=dasherize(name)%>.component';
import { reducer } from './store/<%=dasherize(name)%>.reducer';
import { StateID} from './store/<%=dasherize(name)%>.actions';
import { <%= classify(name) %>Store } from './store/<%=dasherize(name)%>.store';
import { <%= classify(name) %>Effects } from './store/<%=dasherize(name)%>.effects';
import { ComponentsModule } from '@app/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: <%= classify(name) %>Component}]),
    StoreModule.forFeature(StateID, reducer),
    EffectsModule.forFeature([<%= classify(name) %>Effects]),
    ComponentsModule
  ],
  declarations: [
    <%= classify(name) %>Component
  ],
  providers: [
    <%= classify(name) %>Store
  ]
})
export class <%= classify(name) %>Module {
}
