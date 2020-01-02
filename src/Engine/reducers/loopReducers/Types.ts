export interface ISubscription {
    id: number;
    func: Function;
}

export interface ILoopState {
    lastIDUsed: number;
    subscriptions: ISubscription[];
}