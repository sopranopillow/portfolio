import { LoopActionTypes, LoopActions } from '../../actions';
import { ILoopState } from './Types';


const initialLoopState: ILoopState = {
    subscriptions: []
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
                        func: action.func,
                        functionType: action.functionType,
                        collisionFunction: action.collisionFunction,
                        collides: action.collides
                    }
                ]
            };
        default:
            return state;
    }
}