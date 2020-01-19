import React from 'react';
import Loop from '../GameLogic/Components/Loop';
import Player from '../Components/Player';
import Chest from './Chest';
import { setPlayer, addChest, addWall } from '../GameLogic/store/actions';
import { IAppState } from '../GameLogic/store/store';
import { connect } from 'react-redux';

class App extends React.Component<{}>{
  render(){
    return (
      <>
        <Player left={150} top={150} proximityRange={10} size={32}/>
        <Chest content={<div>hello</div>} left={100} top={100} size={32}/>
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
