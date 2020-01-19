import { IBoundaries } from "../../../GeneralUtils";

export enum WallActionTypes {
    ADD = 'ADD'
}

export interface IAddWall{
    type: WallActionTypes.ADD;
    boundaries: IBoundaries;
}

export type WallActions = IAddWall;