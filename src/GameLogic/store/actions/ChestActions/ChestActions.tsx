import { ChestActions, ChestActionTypes } from './Types';
import { IBoundaries } from '../../../GeneralUtils';

export const addChest = (
    boundaries: IBoundaries,
    toggle: Function
): ChestActions => {
    return {
        type: ChestActionTypes.ADD,
        boundaries: boundaries,
        toggle: toggle
    }
}