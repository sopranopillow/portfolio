import * as React from 'react';

export interface ISquareState {
    left: number
}

export default class Square extends React.Component<{}, ISquareState>{
    componentWillMount(){
        this.state = ({
            left: 0
        });
    }

    render(){
        return (
            <div style={{position: 'relative', backgroundColor:'lightblue', width: '20px', height: '20px', left: this.state.left + 'px'}}/>
        );
    }
}