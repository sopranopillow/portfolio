import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { ISubscription, ILoopState } from '../reducers/LoopReducer';

export enum LoopActionTypes {
    SUBSCRIBE = 'SUBSCRIBE'
}

export interface ILoopSubscribe {
    type: LoopActionTypes.SUBSCRIBE;
    func: Function;
}

// ILoopSubscribe | ILoopX
export type LoopActions = ILoopSubscribe;