import { LoopActions, LoopActionTypes } from './Types';
import { IBoundaries } from '../../Components/GeneralUtils/Collisions';

export const subscribeToLoop = (func: Function, inputCheck?: boolean): LoopActions => {
    return {
        type: LoopActionTypes.SUBSCRIBE,
        func: func,
        inputCheck: (inputCheck === undefined) ? false : inputCheck
    };
};

export const addColissionObj = (boundariesFunc: Function, hole: boolean): LoopActions => {
    return {
        type: LoopActionTypes.ADDCOLLISIONOBJ,
        boundariesFunc: boundariesFunc,
    }
}