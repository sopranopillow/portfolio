import { IBoundaries } from "../../../GeneralUtils";
import { WallActions, WallActionTypes } from "./Types";


export const addWall = (
    boundaries: IBoundaries
): WallActions => {
    return {
        type: WallActionTypes.ADD,
        boundaries: boundaries
    }
}