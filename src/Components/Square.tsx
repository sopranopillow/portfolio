import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Engine/store/store';
import { IKey } from '../Engine/Components/Functionality/Loop';
import { addObject, setPlayer } from '../Engine/actions';
import { IBoundaries } from '../Engine/GeneralUtils';

export interface ISquareState {
    boundaries: IBoundaries;
}

interface ISquareProps {
    addObject: typeof addObject;
    setPlayer: typeof setPlayer;
    size: number;
    velocity: number;
}

class Square extends React.Component<ISquareProps, ISquareState>{
    constructor(props: ISquareProps){
        super(props);
        this.state = ({
            boundaries: {
                leftTop: { x: 0, y: 0},
                rightBottom: {x: this.props.size, y: this.props.size}
            }
        });
    }

    componentDidMount(){
        this.props.setPlayer(this.state.boundaries, this.props.velocity, this.nextPos);
    }

    nextPos = (keys: IKey[], currentPos: IBoundaries): IBoundaries => {
        let nextPos: IBoundaries = {
            leftTop: {x: currentPos.leftTop.x, y: currentPos.leftTop.y},
            rightBottom: {x: currentPos.rightBottom.x, y: currentPos.rightBottom.y}
        }
        keys.forEach((key: IKey) =>{
            if(key.isPressed){
                switch(key.key){
                    case 'a':
                        if(key.isPressed){
                            nextPos.leftTop.x-=this.props.velocity;
                        }
                        break;
                    case 's':
                        if(key.isPressed){
                            nextPos.leftTop.y+=this.props.velocity;
                        }
                        break;
                    case 'd':
                        if(key.isPressed){
                            nextPos.leftTop.x+=this.props.velocity;
                        }
                        break;
                    case 'w':
                        if(key.isPressed){
                            nextPos.leftTop.y-=this.props.velocity;
                        }
                        break;
                }
            }
        })
        return nextPos;
    }

    render(){
        const left = this.state.boundaries.leftTop.x;
        const top = this.state.boundaries.leftTop.y;
        const { size } = this.props;
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
        playerState: store.playerState,
        generalState: store.generalState
    };
};

export default connect(mapStateToProps,{ addObject, setPlayer })(Square);