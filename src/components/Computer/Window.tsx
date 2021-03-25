import * as React from 'react';

export class Window extends React.Component {
    render() {
        const styles: React.CSSProperties = {
            position:'fixed',
            display: 'block',
            width: '40%',
            height: '80%',
            left: '30%',
            right: '30%',
            top: '10%',
            bottom: '10%',
            zIndex: 2,
            borderRadius: '10px',
            borderStyle:'solid',
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: '#1a1a1a'
        }

        return (
            <div style={styles}></div>
        )
    }
}