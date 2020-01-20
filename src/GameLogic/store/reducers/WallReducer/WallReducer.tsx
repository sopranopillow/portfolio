import { IWall } from "./Types";
import { WallActions, WallActionTypes } from "../../actions";

const initialWallState: IWall[] = [];

export const wallReducer = (
    state = initialWallState,
    action: WallActions
): IWall[] =>{
    switch(action.type){
        case WallActionTypes.ADDWALL:
            return [
                ...state,
                {
                    boundaries: action.boundaries
                }
            ]
        default:
            return state;
    }
}