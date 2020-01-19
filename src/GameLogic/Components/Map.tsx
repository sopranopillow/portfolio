import * as React from 'react';
import { IAppState } from '../store/store';
import { connect } from 'react-redux';
import { addWall } from '../store/actions';

interface IMapProps {
    addWall: typeof addWall;
    tileSet: number[][];
}

class Map extends React.Component<{}>{

}

const mapStatToProps = (store: IAppState) => {
    return {
        chests: store.chests,
        player: store.player
    };
};

export default connect(mapStatToProps, { addWall })(Map);