import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../Engine/store/store';
import { IKey } from '../Engine/Components/Functionality/Loop';
import { addObject, setPlayer } from '../Engine/actions';
import { IPlayerObject } from '../Engine/reducers';

export interface ISquareState {
    player: IPlayerObject;
}

interface ISquareProps {
    addObject: typeof addObject;
    setPlayer: typeof setPlayer;
    size: number;
    speed: number;
}

class Square extends React.Component<ISquareProps, ISquareState>{
    constructor(props: ISquareProps){
        super(props);
        this.state = ({
            player: {
                boundaries: {
                    leftTop: { x: 0, y: 0},
                    rightBottom: {x: this.props.size, y: this.props.size}
                },
                velocity: this.props.speed
            }
        });
    }

    componentDidMount(){
        //subscribe player
        this.props.setPlayer(this.state.player)
    }

    movement = (keys: IKey[]) => {
        keys.forEach((key: IKey) =>{
            if(key.isPressed){
                switch(key.key){
                    case 'a':
                        if(key.isPressed){
                            //do something
                        }
                        break;
                    case 's':
                        if(key.isPressed){
                            //do something
                        }
                        break;
                    case 'd':
                        if(key.isPressed){
                            //do something
                        }
                        break;
                    case 'w':
                        if(key.isPressed){
                            //do something
                        }
                        break;
                }
            }
        })
    }

    render(){

        const left = this.state.player.boundaries.leftTop.x;
        const top = this.state.player.boundaries.leftTop.y;
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