import * as React from 'react';
import { Pixel } from '../Pixel/Pixel';

interface pixelInfo {
    color: string;
    x: number;
    y: number;
    size: number;
}

export interface DisplayProps {

}

export interface DisplayState {
    pixels: pixelInfo[];
    width: number;
    height: number;
    size: number;
}

export class Display extends React.Component<DisplayProps, DisplayState> {
    constructor(props: DisplayProps) {
        super(props);
        this.state = {
            pixels: [],
            width: 0,
            height: 0,
            size: 0
        };
        this.updateDimensions();
    }

    updateDimensions = () => {
        const size = window.innerWidth / (window.innerWidth < 600 ? 25 : window.innerWidth < 1000 ? 50 : 75);
        const width = Math.floor(window.innerWidth / size);
        const height = Math.floor(window.innerHeight / size);
        const pixels = this.getPixelInfo(width, height, size);

        this.setState({
            pixels: pixels,
            width: width,
            height: height,
            size: size
        });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    getPixelInfo = (width: number, height: number, size: number) => {
        const pixels = [];

        for(let w = 0; w < width; w++){
            for(let h = 0; h < height; h++) {
                pixels.push({
                    color: "#"+Math.floor(Math.random()*16777215).toString(16),
                    x: w * size,
                    y: h * size,
                    size: size
                });
            }
        }
        return pixels;
    }

    render() {
        const style: React.CSSProperties = {
            position: 'absolute',
        }

        return (
            <div style={style}>
                {this.state.pixels ? this.state.pixels.map(pixelInfo => <Pixel {...pixelInfo}/>) : <h1>Display error</h1>}
            </div>
        );
    }
}