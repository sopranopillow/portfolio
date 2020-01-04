import { IBoundaries } from "../../Components/GeneralUtils/Collisions";

export interface ISubscription {
    inputCheck: boolean;
    func: Function;
}

export interface ICollisionObj {
    boundariesFunc: Function;
}

export interface ILoopState {
    subscriptions: ISubscription[];
    boundariesFunc: ICollisionObj[];
}