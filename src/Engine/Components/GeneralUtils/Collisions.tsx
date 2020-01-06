import { ISubscription } from "../../reducers";

export interface IBoundaries {
    numberOfEdges: number;
    edges: number[][];
    hole: boolean;
}

export const checkCollision = (object1: ISubscription, object2: ISubscription): boolean => {
    const obj1Bounds: IBoundaries = object1.collisionFunction!();
    const obj2Bounds: IBoundaries = object2.collisionFunction!();
    const l1: number[] = obj1Bounds.edges[0]; //top left
    const r1: number[] = obj1Bounds.edges[2]; // bottom right

    const l2: number[] = obj2Bounds.edges[0]; //top left
    const r2: number[] = obj2Bounds.edges[2]; // bottom right

    if(r1[0] < l2[0] || r2[0] < l1[0]){
        return false;
    }

    if(r1[1] < l2[1] || r2[1] < l1[1]){
        return false;
    }
    return true;
}
