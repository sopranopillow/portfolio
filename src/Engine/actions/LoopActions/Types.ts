export enum LoopActionTypes {
    SUBSCRIBE = 'SUBSCRIBE',
}

export interface ILoopSubscribe {
    type: LoopActionTypes.SUBSCRIBE;
    func: Function;
    inputCheck: boolean;
}

// ILoopSubscribe | ILoopX
export type LoopActions = ILoopSubscribe;