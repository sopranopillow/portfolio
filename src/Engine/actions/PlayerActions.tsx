import { IBoundaries } from "../GeneralUtils";

export enum PlayerActionTypes {
    SET = 'SET'
}

export interface ISetPlayer {
    type: PlayerActionTypes.SET;
    boundaries: IBoundaries;
    velocity: number;
    nextPos: Function;
}

export const setPlayer = ( boundaries: IBoundaries, velocity: number, nextPos: Function ): PlayerActions => {
    return {
        type: PlayerActionTypes.SET,
        boundaries: boundaries,
        velocity: velocity,
        nextPos: nextPos
    }
}

export type PlayerActions = ISetPlayer;