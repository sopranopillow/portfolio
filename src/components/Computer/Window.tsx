import * as React from 'react';

interface WindowProps extends React.PropsWithChildren<any> {
    title?: string;
    topPadding?: number;
    restPadding?: number;
}

export const Window: React.FC<WindowProps> = ({topPadding = 32, restPadding = 8, children, ...props}: WindowProps) => {
    const [pressed, setPressed] = React.useState(false);
    const [resizePressed, setResizePressed] = React.useState(false);
    const [position, setPosition] = React.useState({x:100, y:100});
    const [windowSize, setWindowSize] = React.useState({width: 800, height: 800});
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
        }
    }, [position]);

    React.useEffect(() => {
        if (ref.current) {
            ref.current.style.transform = `scale(${windowSize.width}px, ${windowSize.width}px)`
        }
    }, [windowSize]);

    const outerStyles: React.CSSProperties = {
        position:'fixed',
        display: 'block',
        width: windowSize.width + 'px',
        height: windowSize.height + 'px',
        zIndex: 2,
        backgroundColor: 'whitesmoke',
    }

    const innerStyles: React.CSSProperties = {
        backgroundColor:'gray',
        margin: `${topPadding}px ${restPadding}px ${restPadding}px ${restPadding}px`,
        width: (windowSize.width - (restPadding * 2)) + 'px',
        height: (windowSize.height - (topPadding + restPadding)) + 'px'
    }

    const titleProps: React.CSSProperties = {
        margin: restPadding,
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

        if (resizePressed) {
            setWindowSize({
                width: windowSize.width + event.movementX,
                height: windowSize.height + event.movementY
            })
        }
    }

    const onMouseDown = (event: React.MouseEvent) => {
        const [x, y] = [event.clientX, event.clientY];

        if (x >= position.x && x <= position.x + windowSize.width &&
            y >= position.y && y <= position.y + (restPadding + topPadding)){
                setPressed(true);
        }

        if (x >= (position.x + windowSize.width - restPadding) && x <= (position.x + windowSize.width) &&
            y >= (position.y + windowSize.height - restPadding) && y <= (position.y + windowSize.height)){
                setResizePressed(true);
        }
    }

    const onMouseUp = (event: React.MouseEvent) => {
        setPressed(false);
        setResizePressed(false);
    }

    return (
        <div ref={ref}
            style={outerStyles}
            onMouseDown={ onMouseDown }
            onMouseMove={ onMouseMove }
            onMouseUp={ onMouseUp }
        >
            <p style={titleProps}>{props.title}</p>
            <div style={innerStyles}>{children}</div>
        </div>
    )
}