import * as React from 'react';

export interface FlexProps {
    inline?: boolean; // Default is flex(block) inline is inline-flex
    flexDirection?: 'row-reverse' | 'column' | 'column-reverse'; // Default: row
    flexWrap?: 'wrap' | 'wrap-reverse'; // Default: nowrap
    justifyContent?: 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; // Default: flex-start
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline'; // Default: stretch
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'; // Default: normal
    style?: React.CSSProperties;
}

export const Flex: React.FunctionComponent<FlexProps> = (props) => {
    const {inline, flexDirection, flexWrap, justifyContent, alignItems, alignContent, style} = props;
    const newStyles: React.CSSProperties = {
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: flexDirection ? flexDirection : 'row',
        flexWrap: flexWrap ? flexWrap : 'nowrap',
        justifyContent: justifyContent ? justifyContent : 'flex-start',
        alignItems: alignItems ? alignItems : 'stretch',
        alignContent: alignContent ? alignContent : 'normal',
        ...style
    };

    return <div style={newStyles}>{props.children}</div>
}