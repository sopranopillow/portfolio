import React from 'react';
import Loop from '../GameLogic/Components/Functionality/Loop';
import Square from '../Components/Square';
import { setPlayer } from '../GameLogic/actions';
import { IAppState } from '../GameLogic/store/store';
import { connect } from 'react-redux';

interface IAppProps{
  setPlayer: typeof setPlayer;
}

class App extends React.Component<IAppProps>{
  render(){
    return (
      <>
        <Square left={10} top={10} size={40}/>
        <Loop/>
      </>
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

export default connect(mapStateToProps,{ setPlayer })(App);
