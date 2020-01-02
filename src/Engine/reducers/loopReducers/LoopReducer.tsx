import { LoopActionTypes, LoopActions } from '../../actions';
import { ILoopState } from './Types';


const initialLoopState: ILoopState = {
    lastIDUsed: -1,
    subscriptions: []
}

export const loopReducer = (
    state = initialLoopState,
    action: LoopActions
): ILoopState => {
    switch(action.type) {
        //case LoopActionTypes.subscribe: -- do somethin
        case LoopActionTypes.SUBSCRIBE:
            return {
                lastIDUsed: state.lastIDUsed+1,
                subscriptions: [
                    ...state.subscriptions,
                    {
                        id: state.lastIDUsed+1,
                        func: action.func
                    }
                ]
            };
        default:
            return state;
    }
}