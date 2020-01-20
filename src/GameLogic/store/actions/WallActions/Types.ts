import { IBoundaries } from "../../../GeneralUtils";

export enum WallActionTypes {
    ADDWALL = 'ADDWALL'
}

export interface IAddWall{
    type: WallActionTypes.ADDWALL;
    boundaries: IBoundaries;
}

export type WallActions = IAddWall;