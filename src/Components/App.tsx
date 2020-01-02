import React from 'react';
import Loop from '../Engine/Components/Functionality/Loop';
import Square from '../Components/Square';
import { Terrain } from '../Engine/Components/Map/Terrain';

class App extends React.Component{
  render(){
    return (
      <>
        <Terrain
          left={0}
          top={0}
          width={10}
          height={20}
          sizeOfCell={40}
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
        <Square/>
        <Loop/>
      </>
    );
  }
}

export default App;
