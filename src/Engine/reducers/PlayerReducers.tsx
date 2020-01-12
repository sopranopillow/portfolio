import { PlayerActions, PlayerActionTypes } from "../actions";
import { IBoundaries } from "../GeneralUtils";

export interface IPlayerObject{
    boundaries?: IBoundaries;
    velocity: number;
    nextPos: Function;
}

const initialPlayerState: IPlayerObject = {
    boundaries: undefined,
    velocity: 0,
    nextPos: ()=>{}
}

export const playerReducer = (
    state = initialPlayerState,
    action: PlayerActions
): IPlayerObject => {
    switch(action.type) {
        case PlayerActionTypes.SET:
            return {
                boundaries: action.boundaries,
                velocity: action.velocity,
                nextPos: action.nextPos
            }
        default:
            return state;
    }
}