import * as React from 'react';
import { IAppState } from '../store/store';
import { connect } from 'react-redux';
import { addWall } from '../store/actions';
import { IBoundaries } from '../GeneralUtils';
import Red from '../../Resources/Sprites/Red.png';
import wall_1 from '../../Resources/Sprites/wall_1.png';

interface ICellProps {
    addWall: typeof addWall;
    cellType: number; // 0-> outside map     1-> wall     2-> floor
    size: number;
    position: IBoundaries;
}

class Cell extends React.Component<ICellProps>{
    img: string = '';

    constructor(props: ICellProps) {
        super(props);
        switch(this.props.cellType){
            case 0:
                this.img = Red;
                break;
            case 1:
                this.img = wall_1;
                this.props.addWall(this.props.position);
                break;
            case 2:
                this.img = Red;
                break;
        }
    }

    render() {
        const { size } = this.props;
        const { topLeft } = this.props.position;
        const styles: React.CSSProperties = {
            position: 'absolute',
            width: size + 'px',
            height: size + 'px',
            left: topLeft.x + 'px',
            top: topLeft.y + 'px'
        }
        return <img alt="cell" style={styles} src={this.img}/>
    }
}

const mapStatToProps = (store: IAppState) => {
    return {
        chests: store.chests,
        player: store.player,
        walls: store.walls
    }
}

export default connect(mapStatToProps, { addWall })(Cell);