import * as React from 'react';

interface FlexItemProps {
    order?: number; // Default: 0
    flexGrow?: number; // Default: 0
    flexShrink?: number; // Default: 1
    flexBasis?: string; // Default: auto; can be percentage or em
    alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'; // Default: auto
}

export const FlexItem: React.FunctionComponent<FlexItemProps> = (props) => {
    const style: React.CSSProperties = {
        order: props.order && 0,
        flexGrow: props.flexGrow && 0,
        flexShrink: props.flexShrink && 1,
        flexBasis: props.flexBasis && 'auto',
        alignSelf: props.alignSelf && 'auto'
    }

    return (
        <div style={style}>{props.children}</div>
    )
}