import * as React from 'react';
import { Grid } from '../components';

export const SimulationEditor: React.FC = () => {
  const [rows, useRows] = React.useState(50);
  const [cols, useCols] = React.useState(20);

  return (
    <div style={{ display: 'inline-flex', width: '100%', height: '100%', flexDirection: 'row' }}>
      <div
        style={{
          display: 'inline-flex',
          width: '80%',
          height: '100%',
          //   backgroundColor: 'lightblue',
        }}
      >
        <SelectableGrid squareSize={20} cols={cols} rows={rows} />
        <Grid squareSize={20} width={cols} height={rows} />
      </div>
      <div style={{ display: 'inline-flex', flexDirection: 'column', flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-flex', backgroundColor: 'lightblue' }}>
          <div>
            <input type="text" placeholder="rows" />
          </div>
          <div>
            <input type="text" placeholder="cols" />
          </div>
        </div>
        <div style={{ display: 'inline-flex', backgroundColor: 'lightred' }}></div>
      </div>
    </div>
  );
};

type SelectableGridProps = {
  rows: number;
  cols: number;
  squareSize: number;
};

const SelectableGrid: React.FC<SelectableGridProps> = props => {
  const { rows, cols, squareSize } = props;

  const cellStyles: React.CSSProperties = {
    all: 'unset',
    boxSizing: 'border-box',
    borderColor: 'whitesmoke',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '1px',
    color: 'white',
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        position: 'absolute',
        display: 'inline-flex',
        gap: 0,
        padding: 0,
        flexWrap: 'wrap',
        width: '100px',
        // height: `calc(${rows} * ${squareSize})px`,
      }}
    >
      {[...Array(rows + cols).keys()].map((a: any) => (
        <button style={cellStyles} />
      ))}
    </div>
  );
};
