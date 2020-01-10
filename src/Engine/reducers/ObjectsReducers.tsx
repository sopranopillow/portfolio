import { IBoundaries } from "../GeneralUtils";
import { ObjectActions, ObjectsActionTypes } from '../actions';

export interface IObjsState {
    objs: IGameObject[];
}

export interface IGameObject {
    boundaries: IBoundaries;
}

const initialObjsState: IObjsState = {
    objs: []
}

export const objsReducer = (
    state = initialObjsState,
    action: ObjectActions
): IObjsState => {
    switch(action.type){
        case ObjectsActionTypes.ADD:
            return{
                objs: [
                    ...state.objs,
                    action.obj
                ]
            }
        default:
            return state;
    }
}