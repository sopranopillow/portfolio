import * as React from 'react';
import './Cell.styles.css';

export interface ICellProps{
    left: number;
    top: number;
    isWall: boolean;
    size: number;
}

export class Cell extends React.Component<ICellProps>{
    render(){
        const styles = {
            left: this.props.left+'px',
            top: this.props.top+'px',
            width: this.props.size+'px',
            height: this.props.size+'px'
        }
        const key = `${this.props.left}x${this.props.top}`;
        return(
            this.props.isWall ? <div key={key} style={styles} className="wall"/> : <div key={key} style={styles} className="open"/>
        );
    }
}
