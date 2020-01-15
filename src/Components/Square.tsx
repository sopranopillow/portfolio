import * as React from 'react';
import { connect } from 'react-redux';
import { setPlayer } from '../GameLogic/actions';
import { IAppState } from '../GameLogic/store/store';
import { IKey } from '../GameLogic/Components/Functionality/Loop';
import { IBoundaries } from '../GameLogic/Components/GeneralUtils/Collisions';

export interface ISquareState {
    position: IBoundaries;
}

interface ISquareProps {
    setPlayer: typeof setPlayer;
    size: number;
    left: number;
    top: number;
}

class Square extends React.Component<ISquareProps, ISquareState>{
    constructor(props: ISquareProps){
        super(props);
        this.state = ({
            position: {
                topLeft: {
                    x: this.props.left,
                    y: this.props.top
                },
                bottomRight: {
                    x: this.props.left + this.props.size,
                    y: this.props.top + this.props.size
                }
            }
        });
    }

    componentDidMount(){
        this.props.setPlayer(this.updateMovement, this.nextPos);
    }

    nextPos = (keys: IKey[]): IBoundaries => {
        let newPos: IBoundaries = this.state.position;

        keys.forEach((key: IKey) =>{
            if(key.isPressed){
                switch(key.key){
                    case 'a':
                        newPos.topLeft.x-=2;
                        break;
                    case 's':
                        newPos.topLeft.y+=2;
                        break;
                    case 'd':
                        newPos.topLeft.x+=2;
                        break;
                    case 'w':
                        newPos.topLeft.y-=2;
                        break;
                }
            }
        });

        return newPos;
    }

    updateMovement = (nextPos: IBoundaries): void => {
        if(nextPos !== undefined){
            this.setState({
                position: nextPos
            });
        }
    }

    render(){
        const { size } = this.props;
        const top = this.state.position.topLeft.y;
        const left = this.state.position.topLeft.x;
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
        player: {
          updateMovement: store.player.updateMovement,
          nextPos: store.player.nextPos
        }
    };
  };

export default connect(mapStateToProps,{ setPlayer })(Square);