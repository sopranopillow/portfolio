import { LoopActions, LoopActionTypes } from './Types';

export const subscribeToLoop = (func: Function, inputCheck?: boolean): LoopActions => {
    return {
        type: LoopActionTypes.SUBSCRIBE,
        func: func,
        inputCheck: (inputCheck === undefined) ? false : inputCheck
    };
};