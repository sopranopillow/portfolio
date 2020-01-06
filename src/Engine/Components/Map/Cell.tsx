import * as React from 'react';
import './Cell.styles.css';
import { connect } from 'react-redux';
import { IAppState } from '../../store/store';
import { subscribeToLoop } from '../../actions';
import { FunctionType } from '../../reducers';
import { IBoundaries } from '../GeneralUtils/Collisions';
export interface ICellProps{
    subscribeToLoop: typeof subscribeToLoop;
    left: number;
    top: number;
    isWall: boolean;
    size: number;
}

class Cell extends React.Component<ICellProps>{
    componentDidMount(){
        if(this.props.isWall){
            this.props.subscribeToLoop(()=>{}, FunctionType.GENERAL, false, this.getBounds, true);
        }
    }

    getBounds = (): IBoundaries => {
        const { left, top, size } = this.props;
        return {
            edges: [
                [left, top],
                [left+size, top],
                [left+size, top+size],
                [left, top+size]
            ],
            hole: false,
            numberOfEdges: 4
        }
    }

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


const mapStateToProps = (store: IAppState) => {
    return {
        loop: {
            subscriptions: store.loopState.subscriptions
        }
    };
};

export default connect(mapStateToProps,{ subscribeToLoop })(Cell);