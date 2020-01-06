import { FunctionType } from "../../reducers";

export enum LoopActionTypes {
    SUBSCRIBE = 'SUBSCRIBE',
    ADDCOLLISIONFUNC = 'ADDCOLLISIONFUNC'
}

export interface ILoopSubscribe {
    type: LoopActionTypes.SUBSCRIBE;
    func: Function;
    inputCheck: boolean;
    functionType: FunctionType;
    collisionFunction: Function | undefined;
    collides: boolean;
}

// ILoopSubscribe | ILoopX
export type LoopActions = ILoopSubscribe;