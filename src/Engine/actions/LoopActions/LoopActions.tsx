import { LoopActions, LoopActionTypes } from './Types';

export const subscribeToLoop = (func: Function): LoopActions => {
    return {
        type: LoopActionTypes.SUBSCRIBE,
        func: func
    };
};