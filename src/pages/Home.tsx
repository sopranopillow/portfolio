import { Grid } from "../Components";
import * as React from "react";

export class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        <Grid squareSize={10} width={100} height={16} />
      </div>
    );
  }
}
