import React from 'react';
import Loop from '../Engine/Components/Functionality/Loop';
import Square from '../Components/Square';
import { addObject, setPlayer } from '../Engine/actions';
import { IAppState } from '../Engine/store/store';
import { connect } from 'react-redux';

interface IAppProps{
  addObject: typeof addObject;
  setPlayer: typeof setPlayer;
}

class App extends React.Component<IAppProps>{
  render(){
    return (
      <>
        <Square speed={2} size={40}/>
        <Loop/>
      </>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    playerState: store.playerState,
    generalState: store.generalState
  };
};

export default connect(mapStateToProps,{ addObject, setPlayer })(App);
