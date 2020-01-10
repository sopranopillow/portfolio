import { IGameObject } from "./ObjectsReducers";
import { PlayerActions, PlayerActionTypes } from "../actions";

export interface IPlayerObject extends IGameObject{
    velocity: number;
}

export interface IPlayerState {
    obj: IPlayerObject | undefined;
}

const initialPlayerState: IPlayerState = {
    obj: undefined
}

export const playerReducer = (
    state = initialPlayerState,
    action: PlayerActions
): IPlayerState => {
    switch(action.type) {
        case PlayerActionTypes.SET:
            return {
                obj: action.obj
            }
        default:
            return state;
    }
}