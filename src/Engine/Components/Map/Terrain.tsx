import * as React from 'react';
import { Cell } from './Cell';

export interface ITerrainProps {
    left: number;
    top: number;
    width: number;
    height: number;
    cells: boolean[];
    sizeOfCell: number;
}

export class Terrain extends React.Component<ITerrainProps>{
    private map: JSX.Element[] = [];

    componentWillMount(){
        const {width, height, sizeOfCell, cells, left, top} = this.props;
        for(let i = 0; i < width; i++){
            for(let j = 0; j < height; j++){
                this.map.push(
                    <Cell
                        left={left+(i*sizeOfCell)}
                        top={top+(j*sizeOfCell)}
                        isWall={cells[j*width+i]}
                        size={sizeOfCell}
                    />
                );
            }
        }
    }

    render(){
        return(
            <div style={{position: 'absolute', left: this.props.left+'px', top: this.props.top+'px'}} className="terrain">
                {this.map.map(cell => {
                    return cell
                })}
            </div>
        );
    }
}