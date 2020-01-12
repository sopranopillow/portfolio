export interface IBoundaries {
    leftTop: Point;
    rightBottom: Point;
}

export interface Point {
    x: number;
    y: number;
}

export const checkCollision = (firstObject: IBoundaries, secondObject: IBoundaries): boolean => {
    if((firstObject.leftTop.x < secondObject.rightBottom.x) && (firstObject.rightBottom.x > secondObject.leftTop.x) &&
        (firstObject.leftTop.y < secondObject.rightBottom.y) && (firstObject.rightBottom.y > secondObject.leftTop.y)){
        return true;
    }
    return false;
}

export const replaceBoundariesValues = (original: IBoundaries, newValues: IBoundaries): void => {
    original.leftTop = newValues.leftTop;
    original.rightBottom = newValues.rightBottom;
}
