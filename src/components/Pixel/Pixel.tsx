import * as React from 'react';
import { PixelProps } from './Pixel.types';

export const Pixel: React.FC<PixelProps> = (props: PixelProps) => {
    const { color, size, x, y } = props;
    return <div className="pixel" style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: x,
        top: y,
        position: 'absolute'
    }}/>;
}