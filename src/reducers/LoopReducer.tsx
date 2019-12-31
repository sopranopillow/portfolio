import { Reducer } from 'redux';
import { LoopActionTypes, LoopActions } from '../actions/LoopActions';

export interface ISubscription {
    id: number;
    func: Function;
}

export interface ILoopState {
    readonly subscriptions: ISubscription[];
}

const initialLoopState: ILoopState = {
    subscriptions: []
}

export const loopReducer: Reducer<ILoopState, LoopActions> = (
    state = initialLoopState,
    action
) => {
    switch(action.type) {
        //case LoopActionTypes.subscribe: -- do somethin
        default:
            return state;
    }
}