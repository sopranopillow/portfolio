import React from 'react';
import Loop from '../containers/Loop';
import Square from '../Components/Square';

class App extends React.Component{
  render(){
    return (
      <>
        <Square/>
        <Loop/>
      </>
    );
  }
}

export default App;
