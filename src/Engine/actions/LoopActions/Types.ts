export enum LoopActionTypes {
    SUBSCRIBE = 'SUBSCRIBE',
}

export interface ILoopSubscribe {
    type: LoopActionTypes.SUBSCRIBE;
    func: Function;
}

// ILoopSubscribe | ILoopX
export type LoopActions = ILoopSubscribe;