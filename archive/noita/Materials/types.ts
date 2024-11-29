export type Material = {
    fn: (grid: number[], coords: number[], width: number, height: number, step: number[], i: number) => void;
    color: string;
}