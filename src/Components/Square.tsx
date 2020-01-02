import * as React from 'react';
import { connect } from 'react-redux';
import { subscribeToLoop } from '../Engine/actions';
import { IAppState } from '../Engine/store/store';

export interface ISquareState {
    left: number;
    movingRight: boolean;
}

interface ISquareProps {
    subscribeToLoop: typeof subscribeToLoop;
}

class Square extends React.Component<ISquareProps, ISquareState>{
    constructor(props: ISquareProps){
        super(props);
        this.state = ({
            left: 0,
            movingRight: true
        });
    }

    componentDidMount(){
        this.props.subscribeToLoop(this.update);
    }

    update = () => {
        if(this.state.left > 200 || this.state.left < 0){
            this.setState({
                movingRight: !this.state.movingRight
            })
        }
        this.setState({
            left: this.state.left+(this.state.movingRight ? 1 : -1)
        });
    }

    render(){
        return (
            <div style={{position: 'relative', backgroundColor:'lightblue', width: '20px', height: '20px', left: this.state.left + 'px'}}/>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        loop: store.loopState.subscriptions
    };
};

export default connect(mapStateToProps,{ subscribeToLoop })(Square);