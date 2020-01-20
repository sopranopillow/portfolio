import { PlayerActions, PlayerActionTypes } from './Types';
import { IKey } from '../../../Components/Loop';
import { IChest, IWall } from '../../reducers';

export const setPlayer = (
    update: (keys: IKey[], chests: IChest[], walls: IWall[]) => void
): PlayerActions => {
    return {
        type: PlayerActionTypes.SET,
        update: update
    };
};