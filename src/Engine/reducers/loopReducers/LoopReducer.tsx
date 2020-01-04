import { LoopActionTypes, LoopActions } from '../../actions';
import { ILoopState } from './Types';


const initialLoopState: ILoopState = {
    subscriptions: [],
    boundariesFunc: []
}

export const loopReducer = (
    state = initialLoopState,
    action: LoopActions
): ILoopState => {
    switch(action.type) {
        case LoopActionTypes.SUBSCRIBE:
            return {
                subscriptions: [
                    ...state.subscriptions,
                    {
                        inputCheck: action.inputCheck,
                        func: action.func
                    }
                ],
                boundariesFunc: state.boundariesFunc
            };
        case LoopActionTypes.ADDCOLLISIONOBJ:
            return {
                subscriptions: state.subscriptions,
                boundariesFunc: [
                    ...state.boundariesFunc,
                    {
                        boundariesFunc: action.boundariesFunc,
                    }
                ]
            }
        default:
            return state;
    }
}