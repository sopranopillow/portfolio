import * as React from "react";
import {
  Icon,
  Screen,
  InnerScreen,
  TaskBar,
  TaskBarIcon,
  Window,
} from "../components";

const pages = [
  "About me",
  "School",
  "Personal projects",
  "School projects",
  "Resume",
];

export interface HomeState {
  pageWindow: { [page: string]: boolean };
}

export class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);
    let pageWindow: { [page: string]: boolean } = {};

    pages.forEach((page) => {
      pageWindow[page] = false;
    });

    this.state = {
      pageWindow: pageWindow,
    };
  }

  componentDidMount() {
    const canvas = document.getElementById("background") as HTMLCanvasElement;
    const gl = canvas.getContext("webgl2");
    if (canvas && gl) {
      gl.clearColor(0, 0, 0, 0.9);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }

  render() {
    const handleWindow = (window: string, val: boolean) => {
      let { pageWindow } = this.state;
      pageWindow[window] = val;
      this.setState({
        pageWindow: pageWindow,
      });
    };

    return (
      <div style={{ fontFamily: "Consolas,monaco,monospace" }}>
        <canvas
          id="background"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        ></canvas>
        <Screen>
          {pages.map(
            (page) =>
              this.state.pageWindow[page] && (
                <Window title={page}>
                  <h1></h1>
                </Window>
              )
          )}
          <InnerScreen>
            {pages.map((page) => (
              <Icon text={page} toggle={handleWindow}>
                {page}
              </Icon>
            ))}
          </InnerScreen>
          <TaskBar>
            <button>Start</button>
            {pages.map((page) => (
              <TaskBarIcon>{page}</TaskBarIcon>
            ))}
          </TaskBar>
        </Screen>
      </div>
    );
  }
}
