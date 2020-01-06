import * as React from 'react';
import { connect } from 'react-redux';
import { subscribeToLoop } from '../Engine/actions';
import { IAppState } from '../Engine/store/store';
import { IKey } from '../Engine/Components/Functionality/Loop';
import { IBoundaries } from '../Engine/Components/GeneralUtils/Collisions';
import { FunctionType } from '../Engine/reducers';

export interface ISquareState {
    left: number;
    top: number;
    movingRight: boolean;
}

interface ISquareProps {
    subscribeToLoop: typeof subscribeToLoop;
    size: number;
}

class Square extends React.Component<ISquareProps, ISquareState>{
    constructor(props: ISquareProps){
        super(props);
        this.state = ({
            left: 102,
            top:102,
            movingRight: true
        });
    }

    generateBoundaries = (): IBoundaries => {
        const { top, left } = this.state;

        return{
            numberOfEdges: 4,
            edges: [
                [left, top],
                [left + this.props.size, top],
                [left + this.props.size, top + this.props.size],
                [left, top + this.props.size]],
            hole: false
        }
    }

    componentDidMount(){
        this.props.subscribeToLoop(this.movement, FunctionType.MOVEMENT, true, this.generateBoundaries, true);
    }

    movement = (keys: IKey[]) => {
        keys.forEach((key: IKey) =>{
            if(key.isPressed){
                switch(key.key){
                    case 'a':
                        if(key.isPressed){
                            this.setState({
                                left: this.state.left-2
                            })
                        }
                        break;
                    case 's':
                        this.setState({
                            top: this.state.top+2
                        })
                        break;
                    case 'd':
                        this.setState({
                            left: this.state.left+2
                        })
                        break;
                    case 'w':
                        this.setState({
                            top: this.state.top-2
                        })
                        break;
                }
            }
        })
    }

    render(){
        const { size } = this.props;
        const { left, top } = this.state;
        const styles: React.CSSProperties = {
            position: 'relative',
            backgroundColor:'lightgreen',
            width: size + 'px',
            height: size + 'px',
            left: left + 'px',
            top: top + 'px'
        }
        return (
            <div style={styles}/>
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

export default connect(mapStateToProps,{ subscribeToLoop })(Square);