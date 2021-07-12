import * as React from "react";
import { Forest } from "../Forest";

export class Home extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden", backgroundColor: '#06083' }}>
        <Forest />
      </div>
    );
  }
}
