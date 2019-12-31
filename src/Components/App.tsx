import React from 'react';
import Loop from '../containers/Loop';
import Square from '../Components/Square';

class App extends React.Component{
  render(){
    return (
      <>
        <h1>Yo</h1>
        <Loop/>
        <Square/>
      </>
    );
  }
}


// interface IAppState {
//   left?: number;
//   logs?: string;
// }

// class App extends React.Component <{}, IAppState>{

//   constructor(props: any){
//     super(props);
//     this.state = {
//       left: 0,
//       logs: '',
//     }
//   }

//   move = (timestamp: number, distance: number, duration: number, startTime: number) =>{
//     timestamp = new Date().getTime();
//     const runtime = timestamp - startTime;
//     let progress = runtime / duration;
//     progress = Math.min(progress, 1);
//     this.setState({
//       left: (distance * progress)
//     });

//     if(runtime < duration){
//       requestAnimationFrame(()=>{
//         this.move(timestamp, distance, duration, startTime)
//       })
//     }
//   };

//   runS = () => {
//     this.setState({
//       left: 0
//     });
//     requestAnimationFrame(() => {
//       const startTime = new Date().getTime();
//       this.move(startTime, 500, 2000, startTime);
//     });
//   };

//   render(){
//     return (
//     <div>
//       <button onClick={this.runS}>move</button>
//     <p>{this.state.logs}</p>
//       <div style={{backgroundColor: 'red', width: '30px', height: '30px', left: this.state.left+'px', position: 'relative'}}></div>
//     </div>
//     );
//   }
// }

export default App;
