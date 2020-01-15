import { PlayerActionTypes, PlayerActions } from '../../actions';
import { IPlayer } from './Types';

const initialPlayerState: IPlayer = {
    nextPos: ()=>{},
    updateMovement: ()=>{}
}

export const playerReducer = (
    state = initialPlayerState,
    action: PlayerActions
): IPlayer => {
    switch(action.type) {
        case PlayerActionTypes.SET:
            return {
                nextPos: action.nextPos,
                updateMovement: action.updateMovement
            };
        default:
            return state;
    }
}