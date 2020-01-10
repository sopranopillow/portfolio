import { IGameObject } from "../reducers";


export enum ObjectsActionTypes {
    ADD = 'ADD'
}

export interface IAddObject {
    type: ObjectsActionTypes.ADD;
    obj: IGameObject;
}

export const addObject = ( obj: IGameObject ): ObjectActions => {
    return {
        type: ObjectsActionTypes.ADD,
        obj: obj
    }
}

export type ObjectActions = IAddObject;