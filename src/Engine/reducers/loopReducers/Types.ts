export interface ISubscription {
    inputCheck: boolean;
    func: Function;
}

export interface ILoopState {
    subscriptions: ISubscription[];
}