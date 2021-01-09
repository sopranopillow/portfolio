import * as React from 'react';

// flexFlow removed due to being a combination of already set values
interface FlexProps {
    inline?: boolean; // Default is flex(block) inline is inline-flex
    flexDirection?: 'row-reverse' | 'column' | 'column-reverse'; // Default: row
    flexWrap?: 'wrap' | 'wrap-reverse'; // Default: nowrap
    justifyContent?: 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; // Default: flex-start
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline'; // Default: stretch
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'; // Default: normal
}

export const Flex: React.FunctionComponent<FlexProps> = (props) => {
    const FlexChildren = props.children;

    const style: React.CSSProperties = {
        display: props.inline ? 'inline-flex' : 'flex',
        flexDirection: props.flexDirection && 'row',
        flexWrap: props.flexWrap && 'nowrap',
        justifyContent: props.justifyContent && 'flex-start',
        alignItems: props.alignItems && 'stretch',
        alignContent: props.alignContent && 'normal',
    }

    return <div style={style}>{FlexChildren}</div>
}