import * as React from 'react';
import { FlexItem } from '../Flex';

export const Icon: React.FunctionComponent = (props) => {
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
        <FlexItem style={styles}>
            {props.children}
        </FlexItem>
    )
}