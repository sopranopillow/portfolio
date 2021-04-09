import * as React from 'react';
import { FlexItem } from '../Flex';

export interface IconProps{
    text: string;
    toggle: (window: string, val: boolean) => void;
}

export const Icon: React.FunctionComponent<IconProps> = props => {
    const styles: React.CSSProperties = {
        backgroundColor: '#efb0ff',
        width: '80px',
        height: '80px',
        margin: '20px',
        outlineStyle:'dashed',
        outlineColor: 'gray',
        outlineWidth: 1
    }

    return (
        <button onClick={() => props.toggle(props.text, true)} style={styles}>
            {props.text}
        </button>
    )
}