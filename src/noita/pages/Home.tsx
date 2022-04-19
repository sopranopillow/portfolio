import * as React from 'react';
import { Grid } from '../components';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid squareSize={10} width={100} height={100} preset="esteban" />
      </div>
    );
  }
}
