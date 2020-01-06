import React from 'react';
import Loop from '../Engine/Components/Functionality/Loop';
import Square from '../Components/Square';
import Terrain from '../Engine/Components/Map/Terrain';
import { subscribeToLoop } from '../Engine/actions';
import { IAppState } from '../Engine/store/store';
import { connect } from 'react-redux';

interface IAppProps{
  subscribeToLoop: typeof subscribeToLoop;
}

class App extends React.Component<IAppProps>{
  render(){
    return (
      <>
        <Terrain
          left={0}
          top={0}
          width={20}
          height={10}
          sizeOfCell={100}
          cells={[
            true, true, true, true, true, true, true, true, true, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, false, false, false, false, false, false, true,
            true, false, false, true, false, false, true, false, true, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, false, false, false, false, false, false, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, false, false, false, false, false, false, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, true, false, false, false, false, true, true,
            true, false, false, false, false, true, true, false, false, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, false, false, false, false, false, false, true,
            true, false, false, true, false, false, true, false, true, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, false, false, false, false, false, false, true,
            true, false, true, false, false, true, false, true, false, true,
            true, false, false, false, false, false, false, false, false, true,
            true, false, true, false, false, true, false, true, false, true,
            true, true, true, true, true, true, true, true, true, true,
          ]}/>
        <Square size={40}/>
        <Loop/>
      </>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
      loop: {
          subscriptions: store.loopState.subscriptions
      }
  };
};

export default connect(mapStateToProps,{ subscribeToLoop })(App);
