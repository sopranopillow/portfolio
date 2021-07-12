import * as React from "react";
import { Campfire } from "./Campfire";
import { Tree } from "./Tree";

export const Forest: React.FC = () => {
  const treeNum = 8;
  const leftForestPos = {
    x: -150,
    y: -200,
    rangeX: window.innerWidth / 3,
    rangeY: window.innerHeight - 200,
  };
  const rightForestPos = {
    x: window.innerWidth - 150,
    y: -200,
    rangeX: window.innerWidth / 3,
    rangeY: window.innerHeight - 200,
  };
  const leftForest = [];
  const rightForest = [];
  const randRange = { y: 50, x: 200 };

  for (let r = 0; r < Math.floor(treeNum / 2); r++) {
    for (let c = 0; c < r + 1; c++) {
      const randY = Math.random() * randRange.y;
      const randX = Math.random() * randRange.x;
      const x =
        leftForestPos.x +
        randX +
        c * (leftForestPos.rangeX / Math.floor(treeNum / 2));
      const y =
        leftForestPos.y +
        randY +
        r * (leftForestPos.rangeY / Math.floor(treeNum / 2));
      leftForest.push(<Tree style={{ left: `${x}px`, top: `${y}px` }} />);
    }
  }

  for (let r = 0; r < Math.floor(treeNum / 2); r++) {
    for (let c = 0; c < r + 1; c++) {
      const randY = Math.random() * randRange.y;
      const randX = Math.random() * randRange.x;
      const x =
        rightForestPos.x -
        randX -
        c * (rightForestPos.rangeX / Math.floor(treeNum / 2));
      const y =
        rightForestPos.y +
        randY +
        r * (rightForestPos.rangeY / Math.floor(treeNum / 2));
      rightForest.push(<Tree style={{ left: `${x}px`, top: `${y}px` }} />);
    }
  }

  return (
    <div className="background">
      {leftForest}
      <Campfire />
      {rightForest}
    </div>
  );
};
