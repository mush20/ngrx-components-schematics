import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';
import { PageStoreComponent } from '@app/store/page/page.component';
import { <%= classify(name) %>Store } from './store/<%=dasherize(name)%>.store';
import { PageState } from './store/<%=dasherize(name)%>.model';

@Component({
  selector: 'app-<%=dasherize(name)%>',
  templateUrl: './<%=dasherize(name)%>.component.html',
  styleUrls: ['./<%=dasherize(name)%>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class <%= classify(name) %>Component extends PageStoreComponent<PageState> implements OnInit {

  @HostBinding('class.app-page-<%=dasherize(name)%>') cssClass: boolean = true;

  constructor(public store: <%= classify(name) %>Store) {
    super(store);
  }

  ngOnInit() {
    this.store.init();
  }

}
