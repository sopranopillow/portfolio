import * as React from 'react';
import { Pixel } from '../Pixel/Pixel';
import { DisplayProps, DisplayState } from './Display.types';

export class Display extends React.Component<DisplayProps, DisplayState> {
    constructor(props: DisplayProps) {
        super(props);
        const size = 16;
        const width = Math.floor(window.innerWidth/size);
        const height = Math.floor(window.innerHeight/size);
        console.log(width, window.innerWidth, height, window.innerHeight);
        const pixels = [];
        for(let i = 0; i < width*height; i++){
            pixels.push(<Pixel color={"#"+Math.floor(Math.random()*16777215).toString(16)} x={(i%width) * size} y={Math.floor(i/height) * size} size={size}/>)
        }

        this.state = {
            pixels: pixels
        };
    }

    render() {
        return (
            <div style={{display:'flex', width: window.innerWidth, height: window.innerHeight, flexFlow: 'row wrap', margin: 0, padding: 0}}>
            {this.state.pixels ? this.state.pixels.map(pixel => pixel) : <h1>Display error</h1>}
            </div>
        );
    }
}