import { sand, sandgenerator, water, watergenerator } from './index';

export type MaterialMap = {
    color: string;
    fn: (grid: number[], coords: number[], width: number, height: number, step: number[], i: number) => void;
    generator: boolean;
};

export const materialMap: { [num: number]: MaterialMap } = {
    0: { color: 'transparent', fn: () => {}, generator: false }, // background
    1: { color: '#d1a95b', fn: sand, generator: false }, // sand
    2: { color: '#9e7f42', fn: sandgenerator, generator: true }, // sand generator
    3: { color: '#548ed6', fn: water, generator: false }, // water
    4: { color: '#3e6ea8', fn: watergenerator, generator: true }, // water generator
};