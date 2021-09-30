import * as React from "react";

// returns [y, x]
const unravel = (num: number, width: number) => [
  Math.floor(num / width),
  num % width,
];

const ravel = (y: number, x: number, width: number) => y * width + x;

let fps = 4,
  fpsInterval: number,
  now: number,
  then: number,
  elapsed: number;

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  width: number;
  height: number;
  squareSize: number;
}

interface GridState {
  grid: number[];
  animationId: number;
}

export class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props);
    this.state = {
      grid: [],
      animationId: 0,
    };
    const { width, height } = this.props;

    for (let i = 0; i < width * height; i++) {
      if (i < width && i % 3 === 0) this.state.grid.push(2);
      else this.state.grid.push(0);
    }
  }

  componentDidMount() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    this.update();
  }

  updateGrid(step: number[], i: number) {
    const { width, height } = this.props;
    const coords = unravel(i, width);

    switch (this.state.grid[i]) {
      case 1:
        if (
          this.state.grid[ravel(coords[0] + 1, coords[1], width)] === 0 &&
          coords[0] + 1 < width
        ) {
          step[ravel(coords[0] + 1, coords[1], width)] = step[i];
          step[i] = 0;
        } else if (
          this.state.grid[ravel(coords[0] + 1, coords[1] + 1, width)] === 0 &&
          coords[0] + 1 < height &&
          coords[1] + 1 < width
        ) {
          step[ravel(coords[0] + 1, coords[1] + 1, width)] = step[i];
          step[i] = 0;
        } else if (
          this.state.grid[ravel(coords[0] + 1, coords[1] - 1, width)] === 0 &&
          coords[0] + 1 < height &&
          coords[1] - 1 >= 0
        ) {
          step[ravel(coords[0] + 1, coords[1] - 1, width)] = step[i];
          step[i] = 0;
        }

      case 2:
        if (this.state.grid[ravel(coords[0] + 1, coords[1], width)] === 0) {
          step[ravel(coords[0] + 1, coords[1], width)] = 1;
        }
    }
  }

  update() {
    requestAnimationFrame(() => this.update());

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      const step = [...this.state.grid];

      for (let i = 0; i < this.state.grid.length; i++) {
        this.updateGrid(step, i);
      }

      this.setState({
        grid: step,
      });
    }
  }

  render() {
    const { width, height, squareSize } = this.props;

    return (
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          width: width * squareSize,
          height: height * squareSize,
        }}
      >
        {this.state.grid.map((num: number) => (
          <div
            style={{
              backgroundColor: `${colors[num]}`,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              color: "white",
              width: squareSize,
              height: squareSize,
            }}
            id={`cell-${num}`}
          ></div>
        ))}
      </div>
    );
  }
}

const colors: { [num: number]: string } = {
  0: "#000000",
  1: "#d1a95b",
  2: "#d1a95b",
};
