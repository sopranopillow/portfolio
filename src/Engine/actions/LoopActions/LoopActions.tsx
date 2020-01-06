import { LoopActions, LoopActionTypes } from './Types';
import { FunctionType } from '../../reducers';

export const subscribeToLoop = (
    func: Function,
    functionType: FunctionType,
    inputCheck?: boolean,
    collisionFunction?: Function,
    collides?: boolean
): LoopActions => {
    return {
        type: LoopActionTypes.SUBSCRIBE,
        func: func,
        functionType: functionType,
        inputCheck: (inputCheck === undefined) ? false : inputCheck,
        collisionFunction: collisionFunction,
        collides: (collides === undefined) ? false : collides
    };
};