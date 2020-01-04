import { IBoundaries } from "../../Components/GeneralUtils/Collisions";

export enum LoopActionTypes {
    SUBSCRIBE = 'SUBSCRIBE',
    ADDCOLLISIONOBJ = 'ADDCOLLISIONOBJ'
}

export interface ILoopSubscribe {
    type: LoopActionTypes.SUBSCRIBE;
    func: Function;
    inputCheck: boolean;
}

export interface ILoopAddCollisionObj {
    type: LoopActionTypes.ADDCOLLISIONOBJ;
    boundariesFunc: Function;
}

// ILoopSubscribe | ILoopX
export type LoopActions = ILoopSubscribe | ILoopAddCollisionObj;