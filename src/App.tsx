import React from 'react';
import { AudioPlayer, Loop, Stage, KeyListener, World } from 'react-game-kit';
import './App.css';
import Matter from 'matter-js';

export class App extends React.Component{
  constructor(props: any){
    super(props);
    this.state = {
      fade: true
    };

    this.keyListener = new KeyListener();
    window.AudioContext = window.AudioContext
  }

  physicsInit(engine) {
    const ground = Matter.Bodies.rectangle(512 * 3, 448, 1024 * 3, 64, {
      isStatic: true,
    });

    const leftWall = Matter.Bodies.rectangle(-64, 288, 64, 576, {
      isStatic: true,
    });

    const rightWall = Matter.Bodies.rectangle(3008, 288, 64, 576, {
      isStatic: true,
    });

    Matter.World.addBody(engine.world, ground);
    Matter.World.addBody(engine.world, leftWall);
    Matter.World.addBody(engine.world, rightWall);
  };

  render(){
    return (
      <Loop>
        <Stage style={{ background: '#3a9bdc' }}>
          <World onInit={this.physicsInit}>
          </World>
        </Stage>
      </Loop>
    );
  }
}

export default App;
