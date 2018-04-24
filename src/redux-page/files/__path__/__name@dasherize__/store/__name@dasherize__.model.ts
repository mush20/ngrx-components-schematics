import { IBasePageState } from '@app/store/page/page.model';
import { TypedMap } from '@app/utils';

export interface IPageState extends IBasePageState {

}

export type PageState = TypedMap<IPageState>;
