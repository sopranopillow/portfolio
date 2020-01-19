import { IBoundaries } from "../../../GeneralUtils";

export enum ChestActionTypes {
    ADD = 'ADD'
}

export interface IAddChest {
    type: ChestActionTypes.ADD;
    boundaries: IBoundaries;
    toggle: Function;
}

export type ChestActions = IAddChest;