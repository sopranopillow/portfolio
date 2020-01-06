export enum FunctionType {
    MOVEMENT = 'MOVEMENT',
    GENERAL = 'GENERAL'
}

export interface ISubscription {
    func: Function;
    inputCheck: boolean;
    functionType: FunctionType;
    collisionFunction: Function | undefined;
    collides: boolean;
}

export interface ILoopState {
    subscriptions: ISubscription[];
}