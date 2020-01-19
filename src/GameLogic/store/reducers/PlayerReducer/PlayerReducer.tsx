import { PlayerActionTypes, PlayerActions } from '../../actions';
import { IPlayer } from './Types';

const initialPlayerState: IPlayer = {
    update: ()=>{},
}

export const playerReducer = (
    state = initialPlayerState,
    action: PlayerActions
): IPlayer => {
    switch(action.type) {
        case PlayerActionTypes.SET:
            return {
                update: action.update
            };
        default:
            return state;
    }
}