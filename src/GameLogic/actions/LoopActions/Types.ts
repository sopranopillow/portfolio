export enum PlayerActionTypes {
    SET = 'SET'
}

export interface IPlayerAdd {
    type: PlayerActionTypes;
    updateMovement: Function;
    nextPos: Function;
}

// ILoopSubscribe | ILoopX
export type PlayerActions = IPlayerAdd;