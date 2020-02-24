import React from 'react';

class App extends React.Component<{}>{
  requestID: number = 0;

  constructor(props: any){
    super(props);
  }

  componentDidMount(){
  }

  componentWillUnmount(){
    cancelAnimationFrame(this.requestID);
  }

  drawCircle = (x: number, y: number, delta_x: number, delta_y: number, size: number) => {

  }

  anim = () => {

  }

  render(){
    return (
      <>
      </>
    );
  }
}

export default App;