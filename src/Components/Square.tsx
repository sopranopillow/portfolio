import * as React from 'react';
import { connect } from 'react-redux';
import { subscribeToLoop } from '../Engine/actions';
import { IAppState } from '../Engine/store/store';
import { IKey } from '../Engine/Components/Functionality/Loop';

export interface ISquareState {
    left: number;
    top: number;
    movingRight: boolean;
}

interface ISquareProps {
    subscribeToLoop: typeof subscribeToLoop;
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
                                left: this.state.left-1
                            })
                        }
                        break;
                    case 's':
                        this.setState({
                            top: this.state.top+1
                        })
                        break;
                    case 'd':
                        this.setState({
                            left: this.state.left+1
                        })
                        break;
                    case 'w':
                        this.setState({
                            top: this.state.top-1
                        })
                        break;
                }
            }
        })
    }

    render(){
        const styles: React.CSSProperties = {
            position: 'relative',
            backgroundColor:'lightblue',
            width: '20px',
            height: '20px',
            left: this.state.left + 'px',
            top: this.state.top + 'px'
        }
        return (
            <div style={styles}/>
        );
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        loop: store.loopState.subscriptions
    };
};

export default connect(mapStateToProps,{ subscribeToLoop })(Square);