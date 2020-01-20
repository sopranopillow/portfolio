import * as React from 'react';
import { connect } from 'react-redux';
import { setPlayer } from '../GameLogic/store/actions';
import { IAppState } from '../GameLogic/store/store';
import { IKey } from '../GameLogic/Components/Loop';
import { IBoundaries, checkCollision, checkProximity } from '../GameLogic/GeneralUtils';
import { IChest, IWall } from '../GameLogic/store/reducers';

interface IPlayerState {
    position: IBoundaries;
}

interface IPlayerProps {
    setPlayer: typeof setPlayer;
    size: number;
    left: number;
    top: number;
    proximityRange: number;
}

class Player extends React.Component<IPlayerProps, IPlayerState>{
    constructor(props: IPlayerProps){
        super(props);
        const { size, left, top } = this.props;

        this.state = ({
            position: {
                topLeft: {
                    x: left,
                    y: top
                },
                bottomRight: {
                    x: left + size,
                    y: top + size
                }
            }
        });
    }

    componentDidMount(){
        this.props.setPlayer(this.update);
    }

    nextPos = (keys: IKey[]): IBoundaries => {
        const {bottomRight, topLeft} = this.state.position;
        let newPos: IBoundaries = {
            topLeft: {
                x: topLeft.x,
                y: topLeft.y
            },
            bottomRight: {
                x: bottomRight.x,
                y: bottomRight.y
            }
        };

        keys.forEach((key: IKey) =>{
            if(key.isPressed){
                switch(key.key){
                    case 'a':
                        newPos.topLeft.x-=2;
                        newPos.bottomRight.x-=2;
                        break;
                    case 's':
                        newPos.topLeft.y+=2;
                        newPos.bottomRight.y+=2;
                        break;
                    case 'd':
                        newPos.topLeft.x+=2;
                        newPos.bottomRight.x+=2;
                        break;
                    case 'w':
                        newPos.topLeft.y-=2;
                        newPos.bottomRight.y-=2;
                        break;
                }
            }
        });

        return newPos;
    }

    checkCollisions = (nextPos: IBoundaries, objs: IBoundaries[]): boolean => {
        for(let i = 0; i < objs.length; i++) {
            if(checkCollision(nextPos, objs[i])) {
                return true;
            }
        }
        return false;
    }

    update = (keys: IKey[], chests: IChest[], walls: IWall[]): void => {
        const nextPos = this.nextPos(keys); // getting next position
        // checking if the square collides with the chests
        if(!this.checkCollisions(nextPos, chests.map((chest: IChest) => chest.boundaries)) &&
            !this.checkCollisions(nextPos, walls.map((wall: IWall) => wall.boundaries))){
            this.setState({
                position: nextPos
            });
        }

        let key = keys.find((key: IKey)=>{
            return (key.key === 'e' && key.isPressed);
        })

        if(key !== undefined) {
            chests.forEach((chest: IChest)=>{
                if(checkProximity(this.state.position, chest.boundaries, this.props.proximityRange)) {
                    chest.toggle();
                }
            })
            key!.isPressed = false;
        }
    }

    render(){
        const { size } = this.props;
        const { topLeft } = this.state.position;
        const styles: React.CSSProperties = {
            position: 'absolute',
            backgroundColor: 'blue',
            left: topLeft.x + 'px',
            top: topLeft.y + 'px',
            width: size + 'px',
            height: size + 'px',
        }

        return <div style={styles}></div>;
    }
}

const mapStateToProps = (store: IAppState) => {
    return {
        player: store.player,
        chests: store.chests,
        walls: store.walls
    };
  };

export default connect(mapStateToProps,{ setPlayer })(Player);
