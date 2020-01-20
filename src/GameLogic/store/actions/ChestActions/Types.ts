import { IBoundaries } from "../../../GeneralUtils";

export enum ChestActionTypes {
    ADDCHEST = 'ADDCHEST'
}

export interface IAddChest {
    type: ChestActionTypes.ADDCHEST;
    boundaries: IBoundaries;
    toggle: () => void;
}

export type ChestActions = IAddChest;