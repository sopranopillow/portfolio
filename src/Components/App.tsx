import React from 'react';
import Loop from '../GameLogic/Components/Loop';
import Player from '../Components/Player';
import Map from '../GameLogic/Components/Map';
import Chest from './Chest';
import { setPlayer, addChest, addWall } from '../GameLogic/store/actions';
import { IAppState } from '../GameLogic/store/store';
import { connect } from 'react-redux';

class App extends React.Component<{}>{
  render(){
    return (
      <>
        <Map left={0} top={0} sizePerCell={32} tileSet={
          [
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
            [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
          ]
        } />
        <Chest left={100} top={100} size={32}>
          <div>hello</div>
        </Chest>
        <Player left={150} top={150} proximityRange={10} size={32}/>
        <Loop/>
      </>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
      player: store.player,
      chests: store.chests,
      walls: store.walls
  };
};

export default connect(mapStateToProps,{ setPlayer, addChest, addWall })(App);
