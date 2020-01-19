export enum PlayerActionTypes {
    SET = 'SET'
}

export interface ISetPlayer {
    type: PlayerActionTypes;
    update: Function;
}

// ILoopSubscribe | ILoopX
export type PlayerActions = ISetPlayer;