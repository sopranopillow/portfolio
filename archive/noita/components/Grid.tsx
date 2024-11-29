import * as React from 'react';
import { materialMap } from '../Materials';
import { ravel, unravel } from '../utils';
import { alphabet } from '../presets';

let fps = 4;
let fpsInterval: number;
let now: number;
let then: number;
let elapsed: number;

/**TODO:
 *  - update to function component
 *  - stop if no change option
 */

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  width: number;
  height: number;
  squareSize: number;
  controls?: boolean;
  preset?: string;
}

type UpdateControls = {
  generate: boolean;
  simulationRunning: boolean;
};

interface GridState {
  grid: number[];
  animationId: number;
  updateControls: UpdateControls;
  width: number;
  height: number;
}

const defaultUpdateControls: UpdateControls = {
  generate: true,
  simulationRunning: true,
};

export class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);
    const { preset } = this.props;

    this.state = {
      grid: [],
      animationId: 0,
      updateControls: defaultUpdateControls,
      width: preset ? preset.length * 4 + preset.length + 1 : this.props.width,
      height: preset ? 5 + 2 : this.props.height,
    };
    const { width, height } = this.state;

    if (preset) {
      const text: number[] = [];

      for (let i = 0; i < width * height; i++) {
        const coord = unravel(i, width);

        if (coord[0] > 0 && coord[0] < height - 1 && coord[1] > 0 && coord[1] % 5 !== 0) {
          text.push(
            alphabet[preset.charAt(Math.floor((coord[1] - 1) / 5))][coord[0] - 1][unravel((coord[1] - 1) % 5, 4)[1]],
          );
        } else {
          text.push(0);
        }
      }

      if (this.props.width > width && this.props.height > height) {
        for (let i = 0; i < this.props.width * this.props.height; i++) {
          this.state.grid.push(0);
        }

        const r_offset = Math.floor((this.props.height - height) / 2);
        const c_offset = Math.floor((this.props.width - width) / 2);
        for (let r = 0; r < height; r++) {
          for (let c = 0; c < width; c++) {
            this.state.grid[ravel(r_offset + r, c_offset + c, this.props.width)] = text[ravel(r, c, width)];
          }
        }

        this.state = {
          ...this.state,
          // grid: text,
          width: this.props.width,
          height: this.props.height,
        };
      } else {
        this.state = {
          ...this.state,
          grid: text,
        };
      }
    } else {
      for (let i = 0; i < width * height; i++) {
        this.state.grid.push(0);
      }
    }
  }

  componentDidMount() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    this.update();
  }

  updateGrid(step: number[], i: number) {
    const { width, height } = this.state;
    const coords = unravel(i, width);

    materialMap[this.state.grid[i]].fn(this.state.grid, coords, width, height, step, i);
  }

  update() {
    requestAnimationFrame(() => this.update());

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      const step = [...this.state.grid];
      const { simulationRunning, generate } = this.state.updateControls;

      if (simulationRunning) {
        for (let i = 0; i < this.state.grid.length; i++) {
          if (materialMap[this.state.grid[i]].generator) {
            if (generate) {
              this.updateGrid(step, i);
            }
          } else {
            this.updateGrid(step, i);
          }
        }
      }

      this.setState({
        grid: step,
      });
    }
  }

  render() {
    const { width, height } = this.state;
    const { squareSize, controls } = this.props;
    const { generate, simulationRunning } = this.state.updateControls;

    const controlsComponent = (
      <div
        style={{
          display: 'inline-flex',
          gap: '20px',
          padding: '10px',
          backgroundColor: 'lightgray',
          position: 'absolute',
        }}
      >
        <button
          onClick={() => this.setState({ updateControls: { ...this.state.updateControls, generate: !generate } })}
        >
          {generate ? 'stop generating' : 'resume generating'}
        </button>
        <button
          onClick={() =>
            this.setState({ updateControls: { ...this.state.updateControls, simulationRunning: !simulationRunning } })
          }
        >
          {simulationRunning ? 'stop simulation' : 'resume simulation'}
        </button>
      </div>
    );

    return (
      <>
        <div
          style={{
            flexWrap: 'wrap',
            display: 'flex',
            width: width * squareSize,
            height: height * squareSize,
          }}
        >
          {this.state.grid.map((num: number) => (
            <div
              style={{
                backgroundColor: `${materialMap[num].color}`,
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                color: 'white',
                width: squareSize,
                height: squareSize,
              }}
              id={`cell-${num}`}
            ></div>
          ))}
        </div>
        {controls && controlsComponent}
      </>
    );
  }
}
