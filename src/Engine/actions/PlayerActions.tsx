import { IPlayerObject } from "../reducers";

export enum PlayerActionTypes {
    SET = 'SET'
}

export interface ISetlayer {
    type: PlayerActionTypes.SET;
    obj: IPlayerObject;
}

export const setPlayer = ( obj: IPlayerObject ): PlayerActions => {
    return {
        type: PlayerActionTypes.SET,
        obj: obj
    }
}

export type PlayerActions = ISetlayer;