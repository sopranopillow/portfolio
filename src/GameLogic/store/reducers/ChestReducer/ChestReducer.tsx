import { ChestActions, ChestActionTypes } from '../../actions';
import { IChest } from './Types';

const initialChestState: IChest[] = [];

export const chestReducer = (
    state = initialChestState,
    action: ChestActions
): IChest[] => {
    switch(action.type){
        case ChestActionTypes.ADDCHEST:
            return [
                ...state,
                {
                    boundaries: action.boundaries,
                    toggle: action.toggle
                }
            ]
        default:
            return state;
    }
}