import * as React from 'react';
import { connect } from 'react-redux';
import { subscribeToLoop, addColissionObj } from '../Engine/actions';
import { IAppState } from '../Engine/store/store';
import { IKey } from '../Engine/Components/Functionality/Loop';
import { IBoundaries } from '../Engine/Components/GeneralUtils/Collisions';

export interface ISquareState {
    left: number;
    top: number;
    movingRight: boolean;
}

interface ISquareProps {
    subscribeToLoop: typeof subscribeToLoop;
    addCollisionObj: typeof addColissionObj;
    size: number;
}

class Square extends React.Component<ISquareProps, ISquareState>{
    constructor(props: ISquareProps){
        super(props);
        this.state = ({
            left: 42,
            top: 42,
            movingRight: true
        });
    }

    generateBoundaries = (): IBoundaries => {
        const { top, left } = this.state;

        return{
            numberOfEdges: 4,
            edges: [[],[],[],[]],
            hole: false
        }
    }

    componentDidMount(){
        this.props.subscribeToLoop(this.update, true);
    }

    update = (keys: IKey[]) => {
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
            backgroundColor:'lightblue',
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
            subscriptions: store.loopState.subscriptions,
            boundariesFunc: store.loopState.boundariesFunc
        }
    };
};

export default connect(mapStateToProps,{ subscribeToLoop, addColissionObj })(Square);