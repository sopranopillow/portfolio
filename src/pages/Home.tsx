import * as React from "react";
import { Forest } from "../Forest";

export class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#06083",
        }}
      >
        <Forest />
      </div>
    );
  }
}
