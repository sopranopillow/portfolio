import * as React from 'react';
import { Flex } from '../Flex';

export const Screen: React.FunctionComponent<{}> = (props) => {
    const styles: React.CSSProperties = {
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100%',
        position: 'absolute'
    }
    return (
        <Flex style={styles}>
            {props.children}
        </Flex>
    );
}