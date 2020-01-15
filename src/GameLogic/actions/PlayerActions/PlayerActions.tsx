import { PlayerActions, PlayerActionTypes } from './Types';

export const setPlayer = (
    updateMovement: Function,
    nextPos: Function,
): PlayerActions => {
    return {
        type: PlayerActionTypes.SET,
        updateMovement: updateMovement,
        nextPos: nextPos,
    };
};