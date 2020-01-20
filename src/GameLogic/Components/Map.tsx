import * as React from 'react';
import { IAppState } from '../store/store';
import { connect } from 'react-redux';
import { addWall } from '../store/actions';
import Cell from './Cell';
import { IBoundaries } from '../GeneralUtils';

interface IMapProps {
    addWall: typeof addWall;
    tileSet: number[][];
    sizePerCell: number;
    left: number;
    top: number;
}

class Map extends React.Component<IMapProps>{
    tiles: React.ReactNode[] = [];

    constructor(props: IMapProps){
        super(props);
        const { tileSet, sizePerCell } = this.props;
        for(let r = 0; r < tileSet.length; r++){
            for(let c = 0; c < tileSet[r].length; c++){
                const pos: IBoundaries = {
                    topLeft:{
                        x: c*sizePerCell,
                        y: r*sizePerCell
                    },
                    bottomRight: {
                        x: c*sizePerCell + sizePerCell,
                        y: r*sizePerCell + sizePerCell
                    }
                }
                this.tiles.push(<Cell key={`${r}x${c}`} position={pos} size={this.props.sizePerCell} cellType={tileSet[r][c]}/>);
            }
        }
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                top: this.props.top + 'px',
                left: this.props.left + 'px',
            }}>
                {this.tiles.map(tile => tile)}
            </div>
        );
    }
}

const mapStatToProps = (store: IAppState) => {
    return {
        chests: store.chests,
        player: store.player,
        walls: store.walls
    };
};

export default connect(mapStatToProps, { addWall })(Map);