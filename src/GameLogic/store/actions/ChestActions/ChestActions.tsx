import { ChestActions, ChestActionTypes } from './Types';
import { IBoundaries } from '../../../GeneralUtils';

export const addChest = (
    boundaries: IBoundaries,
    toggle: () => void
): ChestActions => {
    return {
        type: ChestActionTypes.ADDCHEST,
        boundaries: boundaries,
        toggle: toggle
    }
}