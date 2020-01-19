export interface IBoundaries {
    topLeft: Point;
    bottomRight: Point;
}

export interface Point {
    x: number;
    y: number;
}

export const checkCollision = (firstObject: IBoundaries, secondObject: IBoundaries): boolean => {
    if(firstObject.topLeft.x > secondObject.bottomRight.x ||
        firstObject.bottomRight.x < secondObject.topLeft.x) {
        return false;
    }
    if(firstObject.topLeft.y > secondObject.bottomRight.y ||
        firstObject.bottomRight.y < secondObject.topLeft.y) {
        return false;
    }
    return true;
}


export const checkProximity = (firstObject: IBoundaries, secondObject: IBoundaries, proximity: number): boolean => {
    if(firstObject.topLeft.x > (secondObject.bottomRight.x + proximity) ||
        firstObject.bottomRight.x < (secondObject.topLeft.x - proximity)) {
        return false;
    }
    if(firstObject.topLeft.y > (secondObject.bottomRight.y + proximity) ||
        firstObject.bottomRight.y < (secondObject.topLeft.y - proximity)) {
        return false;
    }
    return true;
}