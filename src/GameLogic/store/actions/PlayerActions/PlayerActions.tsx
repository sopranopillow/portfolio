import { PlayerActions, PlayerActionTypes } from './Types';

export const setPlayer = (
    update: Function
): PlayerActions => {
    return {
        type: PlayerActionTypes.SET,
        update: update
    };
};