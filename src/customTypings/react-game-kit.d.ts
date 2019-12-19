declare module 'react-game-kit' {
    export class Loop extends React.Component<any>{}

    export class Stage extends React.Component<StageProps & any, any>{}

    export interface StageProps{
        height?: number;
        style: object;
        width?: number;
    }

    export class World extends React.Component<WorldProps & any, any>{}

    export interface WorldProps{
        gravity?: shape;
        onInit?: ()=>{};
        onUpdate?: ()=>{};
    }

    export interface shape{
        x: number;
        y: number;
        scale: number;
    }

    export class AudioPlayer extends React.Component<any>{}

    export class KeyListener extends React.Component<any>{}
}