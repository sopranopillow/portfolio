import { ravel } from '../utils';

export const sand = (grid: number[], coords: number[], width: number, height: number, step: number[], i: number) => {
    if (
        grid[ravel(coords[0] + 1, coords[1], width)] === 0 &&
        coords[0] + 1 < width
    ) {
        step[ravel(coords[0] + 1, coords[1], width)] = step[i];
        step[i] = 0;
    } else if (
        grid[ravel(coords[0] + 1, coords[1] + 1, width)] === 0 &&
        coords[0] + 1 < height &&
        coords[1] + 1 < width
    ) {
        step[ravel(coords[0] + 1, coords[1] + 1, width)] = step[i];
        step[i] = 0;
    } else if (
        grid[ravel(coords[0] + 1, coords[1] - 1, width)] === 0 &&
        coords[0] + 1 < height &&
        coords[1] - 1 >= 0
    ) {
        step[ravel(coords[0] + 1, coords[1] - 1, width)] = step[i];
        step[i] = 0;
    }
};

export const sandgenerator = (grid: number[], coords: number[], width: number, height: number, step: number[], i: number) => {
    if (grid[ravel(coords[0] + 1, coords[1], width)] === 0) {
        step[ravel(coords[0] + 1, coords[1], width)] = 1;
    }
};