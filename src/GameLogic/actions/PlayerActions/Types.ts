export enum PlayerActionTypes {
    SET = 'SET'
}

export interface ISetPlayer {
    type: PlayerActionTypes;
    updateMovement: Function;
    nextPos: Function;
}

// ILoopSubscribe | ILoopX
export type PlayerActions = ISetPlayer;