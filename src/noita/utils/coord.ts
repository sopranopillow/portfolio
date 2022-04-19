// returns [y, x]
export const unravel = (num: number, width: number) => [
    Math.floor(num / width),
    num % width,
];
  
export const ravel = (y: number, x: number, width: number) => y * width + x;