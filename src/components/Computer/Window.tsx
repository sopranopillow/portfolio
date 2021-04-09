import * as React from 'react';
import { Flex, FlexItem } from '../Flex';

interface WindowProps {
    title?: string;
}

export const Window: React.FC<WindowProps> = props => {
    const [pressed, setPressed] = React.useState(false);
    const [position, setPosition] = React.useState({x:0, y:0});
    const [windowSize, setWindowSize] = React.useState({width: 400, height: 400});
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position]);

    const outerStyles: React.CSSProperties = {
        position:'fixed',
        display: 'block',
        width: '400px',
        height: '400px',
        zIndex: 2,
        backgroundColor: 'whitesmoke',
    }

    const innerStyles: React.CSSProperties = {
        backgroundColor:'gray',
        margin: '32px 4px 4px 4px',
        width: (windowSize.width - 8) + 'px',
        height: (windowSize.height - 36) + 'px'
    }

    const titleProps: React.CSSProperties = {
        margin: 5,
        padding: 0,
        position: 'fixed'
    }

    const onMouseMove = (event: React.MouseEvent) => {
        if (pressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }

    return (
        <div ref={ref}
            style={outerStyles}
            onMouseDown={ () => setPressed(true) }
            onMouseMove={ onMouseMove }
            onMouseUp={ () => setPressed(false) }
        >
            <p style={titleProps}>{props.title}</p>
            <div style={innerStyles}></div>
        </div>
    )
}